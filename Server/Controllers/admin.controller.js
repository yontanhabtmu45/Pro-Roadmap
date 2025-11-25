// import admin service
const  adminService = require("../Services/admin.service");
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

module.exports = { createAdmin };
