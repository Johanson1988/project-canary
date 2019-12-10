const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');
 

router.post('/', (req,res,next) => {
    const { name, createdBy } = req.body;    
    Game.create({name,createdBy})
        .then(() =>res.status(201).json())        
        .catch(err => res.status(400).json(err))

    
});

module.exports = router;