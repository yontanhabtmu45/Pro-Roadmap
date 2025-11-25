// import express
const express = require('express');
// import router
const router = express.Router();
// import the install route
const installRoute = require('./install.routes');
// import employee route
// const employeeRouter = require('./employee.routes');
// import login routes
// const loginRoutes = require('./login.routes');
// add the install route to the router
router.use(installRoute);
// add employee route to the route
// router.use(employeeRouter)
// add login routes to the main router
// router.use(loginRoutes);


module.exports = router;