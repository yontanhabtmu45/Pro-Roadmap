import React, { useEffect, useState } from 'react'
import stepsService from '../../services/steps.service';
import AdminMenu from "../../components/admin/AdminMenu/AdminMenu";
import "../../Pages/Register.css";

function StepsSettings() {

  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
      // Fetch all admins on component mount
      const fetchSteps = async () => {
        setLoading(true);
        setError("");
        try {
          const res = await stepsService.getSteps();
          if (res.success) {
            setSteps(res.data);
            console.log(res.data)
          } else {
            setError(res.message || "Failed to fetch Steps");
          }
        } catch (err) {
          setError(err.message || "An error occurred");
        } finally {
          setLoading(false);
        }
      };
  
      fetchSteps();
    }, []);
  
    const handleDelete = async (step_id) => {
        if (window.confirm("Are you sure you want to delete this step?")) {
          try {
            const res = await stepsService.deleteStep(step_id);
            if (res.success) {
              setSteps((prev) => prev.filter((step) => step.step_id !== step_id));
              alert("step deleted successfully");
            } else {
              alert(res.message || "Failed to delete step");
            }
          } catch (err) {
            alert(err.message || "An error occurred");
          }
        }
      };
    
      const handleEdit = (step_id) => {
        // Redirect to the edit step page
        window.location.href = `/step/edit-step/${step_id}`;
      };
    


  return (
    <div className="dashboard-wrap">
      <aside className="admin-sidebar">
        <AdminMenu />
      </aside>
      <main className="dashboard-main">
        <div className="home-container">
          <h2>Manage Steps</h2>
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
                  <th>Order</th>
                  <th>Updated at</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(steps) && steps.length > 0 ? (
                  steps.map((step) => (
                    <tr key={step.step_id}>
                      <td>{step.step_id}</td>
                      <td>{step.step_title}</td>
                      <td>{step.step_description}</td>
                      <td>{step.step_order}</td>
                      <td>{step.updated_at}</td>
                      <td>
                        <button
                          className="btn btn-edit"
                          onClick={() => handleEdit(step.step_id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-delete"
                          onClick={() => handleDelete(step.step_id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center" }}>
                      No steps found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  )
}

export default StepsSettings