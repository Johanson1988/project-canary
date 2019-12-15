const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');

router.patch('/', (req,res,next) => { //TODO update route in readme
    const {gameId:_id} = req.body;
    const io = req.app.locals.io;
    var i= 0;
    
    Game.findOneAndUpdate({_id}, {gameStatus:'Running'}, {new:true, useFindAndModify:false}) //TODO update this
        .then((currentGame) =>{   
            console.log(currentGame.players.length);
            const gameRoom = io.of('/' + _id);
            console.log('Game Started: ', _id);
            io.to(_id).emit('game-started', {message:'The game has started'});
            // io.of('/').in(_id).clients((error, data)=> {
            //     if (error) throw error;              
            //     // Returns an array of client IDs like ["Anw2LatarvGVVXEIAAAD"]
            //     console.log('cliente', data); 
            // });
             const intervalId = setInterval(() =>{
                if (i>5) {
                    console.log('clear timer');
                    clearInterval(intervalId);
                    return;
                }
                console.log('New question ',i);
                
                i++;
                io.to(_id).emit('new-question');
             },5000)
         //   console.log(gameRoom);
         i++;
         console.log('i',i);
            //io.emit('game-started', {message:'The game has started'});

            //io.emit('game-started', {message:'The game has started'});
            
            res.status(200).send();

        })
        .catch(err => res.status(400).json(err));
});

module.exports = router;