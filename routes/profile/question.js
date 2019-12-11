const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');
const parser = require('./../../config/cloudinary');

router.post('/image',parser.single('photo'), (req, res, next) => { //TODO ADD route to readme
    console.log(req.file);
    if (!req.file) {
      next(new Error('No file uploaded!'));
    };
    const imageUrl = req.file.secure_url;
    res.json(imageUrl).status(200);
  });

router.post('/', (req,res,next) => {
    
    const newQuestion = req.body;
    newQuestion.created_by = req.session.currentUser._id;
    Question.create(newQuestion)
        .then(() =>res.status(201).json())        
        .catch(err => res.status(400).json(err))
});

module.exports = router;