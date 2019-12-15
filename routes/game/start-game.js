const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');

router.patch('/', (req,res,next) => { //TODO update route in readme
    const {gameId:_id} = req.body;
    const io = req.app.locals.io
    
    Game.updateOne({_id},{gameStatus:'Running'}) //TODO update this
        .then(() =>{   

            const gameRoom = io.of('/' + _id);
            gameRoom.emit('game-room', 'Game room msg');
            io.emit('game-started', {message:'The game has started'});

            //io.emit('game-started', {message:'The game has started'});
            
            res.status(200).send();

        })
        .catch(err => res.status(400).json(err));
});

module.exports = router;