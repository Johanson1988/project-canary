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
        .then((gameFound) => res.status(200).json(gameFound))
        .catch(err => res.status(400).json(err));
    
});

router.post('/',validationGame, (req,res,next) => {
    const Question = require('../../models/Question');
    const QRCode = require('qrcode');
    console.log(req.body);
    const { numberofquestions:numberOfQuestions,
      webdevcheck:webDevCheck,
      datanylcheck:dataNylCheck,
      uxcheck:uxCheck,
      name,gameStatus } = req.body;
    // try {
    //   if (!webDevCheck && !dataNylCheck && !uxCheck) throw 400;
    // }
    // catch (err) { res.status(400).json(err)}
    
    const createdBy = req.session.currentUser._id;

    const getQuestions = (field) => {
      return Question.find({questionType:field})
        .then(questionList => questionList)
        .catch(err => res.status(400).json(err));
    }
    const questionsPromises = [];
    if (webDevCheck) {
      const webDevQuestions = getQuestions('webdev');
      questionsPromises.push(webDevQuestions);
    }
    if (dataNylCheck) {
      const dataQuestions = getQuestions('data');
      questionsPromises.push(dataQuestions);
    }
    if (uxCheck) {
      const uxQuestions = getQuestions('ux')
      questionsPromises.push(uxQuestions);
    }
    const finalQuestionsList = [];
    Promise.all(questionsPromises)
      .then(data => {     
        let i = 1; 
        const totalIterations = numberOfQuestions/data.length; 
        while (i<=totalIterations) {
          data.forEach(listOfQuestions => {
            finalQuestionsList.push((listOfQuestions.splice(Math.random()*listOfQuestions.length,1))[0]._id);
          });
          i++;
        }
        Game.create({name,createdBy,questions:finalQuestionsList,gameStatus})
              .then((createdGame) => {
                const {_id} = createdGame;
                QRCode.toDataURL('/game/' + _id, (err, qrCode) => {
                  if (!err) {                    
                    createdGame.qrCode = qrCode;
                    Game.findOneAndUpdate({_id}, {qrCode}, {new:true, useFindAndModify:false})
                      .populate('questions')
                      .then((updatedGame) =>res.status(201).json(updatedGame))
                      .catch(err => res.status(400).json(err));                    
                  }
                  else res.status(400).json(err);
                  });                
              })
              .catch(err => res.status(400).json(err));            
                 
      })
      .catch(err => console.log(err));
    
});

module.exports = router;