const express = require('express');
const router = express.Router();

// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
    validationGame
  } = require('../../helpers/middlewares');

router.use('/addplayer/image', require('./add-image'));
router.use('/update-score', require('./update-score'));
router.use('/addplayer', require('./add-player')); //TODO update this route in readme



module.exports = router;