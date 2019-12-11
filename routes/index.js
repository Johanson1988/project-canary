const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/game', require('./game/game-index'));
router.use('profile/', require('./profile/profile-index'));

module.exports = router;