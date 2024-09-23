const express = require('express');
   const router = express.Router();
   const loginController = require('../controllers/Login');


router.post('/contact', loginController.SubmitForm);

module.exports = router;