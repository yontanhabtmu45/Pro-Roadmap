// import admin service
const adminService = require("../Services/admin.service");
// create add admin controller
async function createAdmin(req, res, next) {
  // check if admin already exist in database
  const adminExists = await adminService.checkIfAdminExists(
    req.body.admin_email
  );
  // if admin exists, send a response to client
  if (adminExists) {
    return res.status(400).json({ message: "admin already exists" });
  } else {
    try {
      const adminData = req.body;
      // create a new admin
      const newAdmin = await adminService.createAdmin(adminData);
      // send a response to client
      if (!newAdmin) {
        return res.status(400).json({ message: "Failed to create admin" });
      } else {
        return res.status(201).json({ status: "true" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

// create get all admins controller
async function getAllAdmins(req, res) {
  try {
    const result = await adminService.getAllAdmins();
    return res.status(200).json({ status: "success", data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// create get admin controller
async function getAdmin(req, res, next) {
  try {
    const { admin_email } = req.params;
    if (!admin_email) {
      return res.status(404).json({ message: "admin_email required" });
    }
    const result = await adminService.getAdminByEmail(admin_email);
    return res.status(200).json({ status: "success", data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// create delete admin controller
async function deleteAdmin(req, res, next) {
  try {
    const adminId = req.params.admin_id;
    const result = await adminService.deleteAdmin(adminId);
    return res
      .status(200)
      .json({ status: "success", message: "Admin deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// create update admin controller
async function updateAdmin(req, res, next) {
  try {
    const adminId = req.params.admin_id;
    const adminData = req.body;
    const result = await adminService.updateAdmin(adminId, adminData);
    if (!adminData) {
      return res.status(400).json({ error: "Failed to update admin" });
    }
    return res
      .status(200)
      .json({ status: "success", message: "Admin updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdmin,
  deleteAdmin,
  updateAdmin,
};
