const express = require('express');
const router = express.Router();

// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
    validationGame
  } = require('../../helpers/middlewares');


  router.use('/', isLoggedIn, require('./game'));

module.exports = router;