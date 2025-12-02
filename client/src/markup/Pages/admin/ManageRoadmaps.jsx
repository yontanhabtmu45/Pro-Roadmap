import React, { useEffect, useState } from "react";
import roadmapService from "../../services/roadmap.service";
import AdminMenu from "../../components/admin/AdminMenu/AdminMenu";
import "../../Pages/Register.css";

function ManageRoadmaps() {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch all admins on component mount
    const fetchRoadmaps = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await roadmapService.getAllRoadmaps();
        if (res.success) {
          setRoadmaps(res.data);
          console.log(res.data)
        } else {
          setError(res.message || "Failed to fetch Roadmaps");
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmaps();
  }, []);

  const handleDelete = async (roadmap_id) => {
    if (window.confirm("Are you sure you want to delete this roadmap?")) {
      try {
        const res = await roadmapService.deleteRoadmap(roadmap_id);
        if (res.success) {
          setRoadmaps((prev) => prev.filter((roadmap) => roadmap.roadmap_id !== roadmap_id));
          alert("roadmap deleted successfully");
        } else {
          alert(res.message || "Failed to delete roadmap");
        }
      } catch (err) {
        alert(err.message || "An error occurred");
      }
    }
  };

  const handleEdit = (roadmap_id) => {
    // Redirect to the edit roadmap page
    window.location.href = `/roadmap/edit-roadmap/${roadmap_id}`;
  };


  return (
    <div className="dashboard-wrap">
      <aside className="admin-sidebar">
        <AdminMenu />
      </aside>
      <main className="dashboard-main">
        <div className="home-container">
          <h2>Manage Roadmaps</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Updated at</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(roadmaps) && roadmaps.length > 0 ? (
                  roadmaps.map((roadmap) => (
                    <tr key={roadmap.roadmap_id}>
                      <td>{roadmap.roadmap_id}</td>
                      <td>{roadmap.title}</td>
                      <td>{roadmap.description}</td>
                      <td>{roadmap.updated_at}</td>
                      <td>
                        <button
                          className="btn btn-edit"
                          onClick={() => handleEdit(roadmap.roadmap_id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-delete"
                          onClick={() => handleDelete(roadmap.roadmap_id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center" }}>
                      No roadmaps found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}

export default ManageRoadmaps;
