const express = require('express');
const router = express.Router();

// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
    validationGame
  } = require('../../helpers/middlewares');

  router.use('/start-game',isLoggedIn, require('./start-game'));
  router.use('/end-game',isLoggedIn, require('./end-game'));
  router.use('/', isLoggedIn, require('./game'));

module.exports = router;