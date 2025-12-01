import React from "react";
import { Link } from "react-router-dom";
import "../../../Pages/Home.css";
import "./AdminMenu.css";

function AdminMenu() {
  return (
    <aside className="card admin-menu">
      <h3 className="card-title">Admin</h3>
      <p className="card-desc">Quick links and management actions</p>
      <div className="list-group" style={{marginTop:12}}>
        <Link to="/admin" className="list-link">Dashboard</Link>
        <Link to="/admins" className="list-link">Manage Admins</Link>
        <Link to="/admin/roadmaps" className="list-link">Manage Roadmaps</Link>
        <Link to="/admin/roadmap" className="list-link">Add New Roadmap</Link>
        <Link to="/admin/steps" className="list-link">Steps Settings</Link>
        <Link to="/admin/step" className="list-link">Add New Step</Link>
      </div>
    </aside>
  );
}

export default AdminMenu;
