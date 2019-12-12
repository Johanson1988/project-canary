const express = require('express');
const router = express.Router();


router.use('/addplayer/image', require('./add-image'));
router.use('/update-score', require('./update-score'));
router.use('/create', require('./create-player'));
router.use('/addplayer', require('./add-player')); //TODO update this route in readme



module.exports = router;