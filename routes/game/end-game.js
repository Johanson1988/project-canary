const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');

router.patch('/', (req,res,next) => { //TODO update route in readme
    const io = req.app.locals.io;
    const {gameId:_id} = req.body;
    Game.updateOne({_id},{gameStatus:'Finished'})
        .then(() =>{
            io.in(_id).clients((error, players) => {
                if (error) throw error;              
                players.forEach(player => io.sockets.sockets[player].leave(_id));              
            });              
            res.status(200).send();
        })
        .catch(err => res.status(400).json(err));    
});

module.exports = router;