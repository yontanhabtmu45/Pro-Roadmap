import React, { useEffect, useState } from "react";
import AdminMenu from "../AdminMenu/AdminMenu";
import adminService from "../../../services/admin.service";
import roadmapService from "../../../services/roadmap.service";
import stepsService from "../../../services/steps.service";
import "./Dashboard.css";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [admins, setAdmins] = useState([]);
  const [roadmaps, setRoadmaps] = useState([]);
  const [stepsCountByRoadmap, setStepsCountByRoadmap] = useState({});

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const [aRes, rRes] = await Promise.all([
          adminService.getAllAdmins(),
          roadmapService.getAllRoadmaps(),
        ]);
        if (!mounted) return;
        if (aRes.success) setAdmins(aRes.data.data || aRes.data);
        else setError(aRes.message || "Failed to load admins");
        if (rRes.success) setRoadmaps(rRes.data.data || rRes.data);
        else setError((msg) => msg || rRes.message || "Failed to load roadmaps");

        // Fetch steps count per roadmap (serially or in parallel)
        const counts = {};
        if (rRes.success && Array.isArray(rRes.data.data)) {
          await Promise.all(
            rRes.data.data.map(async (rm) => {
              try {
                const s = await stepsService.getStepsByRoadmap(rm.roadmap_id);
                if (s.success && Array.isArray(s.data.data)) counts[rm.roadmap_id] = s.data.data.length;
                else counts[rm.roadmap_id] = 0;
              } catch (e) {
                counts[rm.roadmap_id] = 0;
              }
            })
          );
        }
        if (mounted) setStepsCountByRoadmap(counts);
      } catch (e) {
        if (mounted) setError(e.message || "An error occurred");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => (mounted = false);
  }, []);

  const totalSteps = Object.values(stepsCountByRoadmap).reduce((s, n) => s + (n || 0), 0);

  return (
    <div className="dashboard-wrap">
      <aside className="admin-sidebar">
        <AdminMenu />
      </aside>
      <main className="dashboard-main">
        <div className="home-container">
          <div className="dashboard-hero">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                <h2 className="hero-title">Admin Dashboard</h2>
                <p className="hero-sub">Overview of admins, roadmaps and steps.</p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="empty">Loading...</div>
          ) : error ? (
            <div className="empty">{error}</div>
          ) : (
            <>
              <div className="summary-cards">
                <div className="card">
                  <h3>{admins ? admins.length : 0}</h3>
                  <p>Admins</p>
                </div>
                <div className="card">
                  <h3>{roadmaps ? roadmaps.length : 0}</h3>
                  <p>Roadmaps</p>
                </div>
                <div className="card">
                  <h3>{totalSteps}</h3>
                  <p>Total Steps</p>
                </div>
              </div>

              <section className="recent-list">
                <h4>Recent Roadmaps</h4>
                {roadmaps && roadmaps.length ? (
                  roadmaps.map((rm) => (
                    <div className="item card" key={rm.roadmap_id} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <div>
                        <strong>{rm.title || rm.roadmap_title || "Untitled"}</strong>
                        <div className="meta">{rm.description || rm.roadmap_description}</div>
                      </div>
                      <div className="meta">Steps: {stepsCountByRoadmap[rm.roadmap_id] || 0}</div>
                    </div>
                  ))
                ) : (
                  <div className="empty">No roadmaps found</div>
                )}
              </section>

              <section className="recent-list">
                <h4>Admins</h4>
                {admins && admins.length ? (
                  admins.map((ad) => (
                    <div className="item card" key={ad.admin_id || ad.admin_email} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <div>
                        <strong>{ad.admin_name || ad.admin_email}</strong>
                        <div className="meta">{ad.admin_email}</div>
                      </div>
                      <div className="meta">{ad.created_at || "-"}</div>
                    </div>
                  ))
                ) : (
                  <div className="empty">No admins found</div>
                )}
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
