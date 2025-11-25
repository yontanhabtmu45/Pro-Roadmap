// Import the query function from the db.config.js file
const conn = require("../config/db.config");
// Import the bcrypt module
const bcrypt = require("bcrypt");
// A function to check if employee exists in the database
async function checkIfAdminExists(email) {
  const query = "SELECT * FROM admin_users WHERE admin_email = ? ";
  const rows = await conn.executeQuery(query, [email]);
  console.log(rows);
  if (rows.length > 0) {
    return true;
  }
  return false;
}
// A function to create a new admin
async function createAdmin(adminData) {
  const { admin_name, admin_email, admin_password_hash } = adminData;
    // Check if admin already exists
    const adminExists = await checkIfAdminExists(admin_email);
    if (adminExists) {
      throw new Error("Admin with this email already exists");
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(admin_password_hash, 10);
    // Insert the new admin into the database
    const query =
      "INSERT INTO admin_users (admin_name, admin_email, admin_password_hash) VALUES (?, ?, ?)";
    const result = await conn.executeQuery(query, [
      admin_name,
      admin_email,
      hashedPassword,
    ]);
    return result;
}

// A function to get admin by email
async function getAdminByEmail(admin_email) {
    const query = "SELECT * FROM admin_users WHERE admin_email = ? ";
    const rows = await conn.executeQuery(query, [admin_email]);
    return rows;
}

// Export the functions
module.exports = {
  createAdmin,
  checkIfAdminExists,
  getAdminByEmail
};