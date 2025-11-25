import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap"; // Example: Bootstrap for styling

const AdminPanel = ({ id }) => {
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Simulate fetching roadmap by id
    setTimeout(() => {
      setRoadmap({
        id,
        title: `Roadmap ${id}`,
        description: "Edit description",
        category: "Development",
        steps: [{ id: 1, title: "Step 1" }],
      });
      setLoading(false);
    }, 300);
  }, [id]);

  async function handleSave() {
    setSaving(true);
    // Simulate saving roadmap
    await new Promise((r) => setTimeout(r, 600));
    setSaving(false);
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Edit Roadmap</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={roadmap.title}
            onChange={(e) => setRoadmap({ ...roadmap, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={roadmap.description}
            onChange={(e) =>
              setRoadmap({ ...roadmap, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={roadmap.category}
            onChange={(e) =>
              setRoadmap({ ...roadmap, category: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Steps</label>
          {roadmap.steps.map((step, index) => (
            <div key={step.id} className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                value={step.title}
                onChange={(e) => {
                  const updatedSteps = [...roadmap.steps];
                  updatedSteps[index].title = e.target.value;
                  setRoadmap({ ...roadmap, steps: updatedSteps });
                }}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Saving...
            </>
          ) : (
            "Save"
          )}
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;