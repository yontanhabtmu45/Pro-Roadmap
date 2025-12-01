import React from "react";
// Import the AdminMenu component
import AdminMenu from "../../components/admin/AdminMenu/AdminMenu";

function AddAdmin() {
  return (
    <div className="container-fluid admin-pages">
      <div className="row">
        <div className="col-md-3 admin-left-side">
          <AdminMenu />
        </div>
        <div className="col-md-9 admin-right-side">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
