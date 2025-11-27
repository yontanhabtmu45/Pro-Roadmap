import React from "react";

function AdminMenu() {
  return (
    <div>
      <div className="admin-menu">
        <h2>Admin Menu</h2>
      </div>
      <div className="list-group">
        <a href="/admin" className="list-group-item list-group-item-action">Dashboard</a>
        <a href="/admins" className="list-group-item list-group-item-action">Manage Admins</a>
        <a href="/admin/roadmaps" className="list-group-item list-group-item-action">Manage Roadmaps</a>
        <a href="/admin/roadmap" className="list-group-item list-group-item-action">Add New Roadmap</a>
        <a href="/admin/steps" className="list-group-item list-group-item-action">Steps Settings</a>
        <a href="/admin/step" className="list-group-item list-group-item-action" >Add New Step</a>
      </div>
    </div>
  );
}

export default AdminMenu;
