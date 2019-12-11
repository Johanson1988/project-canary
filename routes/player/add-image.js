const express = require('express');
const router = express.Router();

const parser = require('./../../config/cloudinary');

router.post('/image',parser.single('photo'), (req, res, next) => { //TODO ADD route to readme
    if (!req.file) {
      next(new Error('No file uploaded!'));
    };
    const imageUrl = req.file.secure_url;
    res.json(imageUrl).status(200);
  });

  module.exports = router;