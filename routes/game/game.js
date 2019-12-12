const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');
const QRCode = require('qrcode');

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
        .then((gameFound) => res.status(200).json(gameFound))
        .catch(err => res.status(400).json(err));
    
});

router.post('/',validationGame, (req,res,next) => {
    const { name } = req.body;
    const createdBy = req.session.currentUser._id;    
    Game.create({name,createdBy})
    .then((createdGame) => {
        QRCode.toDataURL('I am a pony!', (err, url) => {
            console.log(url)
          });
        
        res.status(201).send();
        
            
    })  
    .catch(err => res.status(400).json(err));
});

module.exports = router;