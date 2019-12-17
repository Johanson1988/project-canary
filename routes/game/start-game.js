const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');

router.patch('/', (req,res,next) => { //TODO update route in readme
    const {gameId:_id} = req.body;
    const io = req.app.locals.io;
    const points = [];
    let i = 0;
    
    Game.findOneAndUpdate({_id}, {gameStatus:'Running'}, {new:true, useFindAndModify:false})  //TODO update this
        .populate('questions')
        .populate('players')  
        .then((currentGame) =>{
            currentGame.questions.forEach((question, firstIndex) => {
                points.push([]);
                currentGame.players.forEach((player, index) => points[firstIndex].push(index * 100 + 100));
                });                
            Game.updateOne({_id}, {scoreboard:points})
                .catch(err => res.status(400).json(err));                            
            console.log('Game Started: ', _id);
            io.to(_id).emit('game-started', {message:'The game has started'});
            // io.of('/').in(_id).clients((error, data)=> {
            //     if (error) throw error;              
            //     // Returns an array of client IDs like ["Anw2LatarvGVVXEIAAAD"]
            //     console.log('cliente', data); 
            //  });
            const {questions} = currentGame;
            io.to(_id).emit('new-question', {question : questions[i]});
                console.log(questions[i].question);
                i++;
            
            const intervalId = setInterval(() =>{                 
                if (i >= currentGame.questions.length-1) {
                    console.log('clear timer');
                    Game.findOne({_id})
                        .populate('players')  
                        .then(gameFound => {
                            io.to(_id).emit('show-results', gameFound.players);
                            clearInterval(intervalId);
                            return;
                        })
                        .catch(err => {
                            console.error(err);
                            clearInterval(intervalId);
                        });
                    
                }
                
                io.to(_id).emit('new-question', {question : questions[i]});
                console.log(questions[i].question);
                i++;
            },10000);
            res.status(200).send();
        })
        .catch(err => res.status(400).json(err));
});
module.exports = router;