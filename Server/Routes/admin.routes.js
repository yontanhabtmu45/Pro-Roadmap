// import express module
const express = require('express')

const router = express.Router();

// import admin controller
const adminController = require('../Controllers/admin.controller')
// crete route to handle add admin request on post
router.post('/api/admin', adminController.createAdmin);

module.exports = router;