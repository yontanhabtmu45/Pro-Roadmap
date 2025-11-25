// Import the login service 
const loginService = require('../Services/login.service');
// Import the jsonwebtoken module
const jwt = require("jsonwebtoken");
// Import the secret key from the environment variables
const jwtSecret = process.env.JWT_SECRET;

// handle admin login
async function logIn(req, res, next) {
    try {
        console.log(req.body)
        const adminData = req.body;

        const admin = await loginService.loginAdmin(adminData);
        // If the admin is not found
    if (admin.status === "Fail") {
      res.status(403).json({
        status: admin.status,
        message: admin.message,
      });
      console.log(employee.message)
    }
    // If successful, send a response to the client
    const payload = {
      admin_id: admin.data.admin_id,
      admin_email: admin.data.admin_email,
      admin_name: admin.data.admin_name,
    };
    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: "24h",
    });
    // console.log(token);
    const sendBack = {
      admin_token: token,
    };
    res.status(200).json({
      status: "success",
      message: "admin logged in successfully",
      data: sendBack,
    });
    } catch (error) {
        console.log(error)
    }
}

// Export the functions 
module.exports = {
  logIn
};