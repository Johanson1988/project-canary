const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');

// questionType: {type:String, enum:['data','webdev', 'ux'], required: true}, //TODO update readme name
//     rightAnswer: {type: String, required: true},
//     wrongAnswer1: {type:String, required: true}, //TODO update this on readme
//     wrongAnswer2: {type:String, required: true},
//     wrongAnswer3: {type:String, required: true},
//     pictureUrl: {type:String},   //TODO make this required and update this on readme
//     difficulty: {type:String, enum:[easy,hard], default:'easy'},
//     created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}

router.post('/', (req,res,next) => {
    
    const newQuestion = req.body;
    Question.create(newQuestion)
        .then(() =>res.status(201).json())        
        .catch(err => res.status(400).json(err))
});

module.exports = router;