// import express
const express = require('express');
// import router
const router = express.Router();
// import the install route
const installRoute = require('./install.routes');
// import admin route
const adminRouter = require('./admin.routes');
// import login routes
const loginRoutes = require('./login.routes');
// add the install route to the router
router.use(installRoute);
// add admin route to the route
router.use(adminRouter)
// add login routes to the main router
router.use(loginRoutes);


module.exports = router;