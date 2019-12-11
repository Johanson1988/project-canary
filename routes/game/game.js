const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');

// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
    validationGame
  } = require('../../helpers/middlewares');

 
router.get('/:_id', (req,res,next) => {
    const {_id} = req.params;
    Game.findOne({_id})
        .then((gameFound) => {
            console.log(gameFound)
            res.status(200).json(gameFound);
        })
        .catch(err => res.status(400).json(err));
    
});

router.post('/',validationGame, (req,res,next) => {
    const { name, createdBy } = req.body;    
    Game.create({name,createdBy})
        .then(() =>res.status(201).json())        
        .catch(err => res.status(400).json(err))    
});

module.exports = router;