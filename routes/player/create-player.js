const express = require('express');
const router = express.Router();

router.post('/', (req,res,next) => {
    const {gameId} = req.query;
    console.log(gameId);
    res.status(200).json(gameId);
})

module.exports = router;