const express = require('express');
const router = express.Router();
const User = require('./../../models/User');
const parser = require('./../../config/cloudinary');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
  } = require('./../../helpers/middlewares');

router.delete('/delete',isLoggedIn, (req,res,next) => { //TODO update route & body in readme
  const _id = req.session.currentUser._id;
  User.deleteOne({_id})
  .then(() => res.status(204).send())
  .catch( err => res.status(400).json(err));  
  req.session.destroy();
  });

  // upload Image
router.post('/update/image', parser.single('photo'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded!'));
  };
  const imageUrl = req.file.secure_url;
  res.json(imageUrl).status(200);
});

  
router.put('/update', isLoggedIn, (req, res,next) => { //TODO update readme with this values
  const {username,oldpassword,password,photoUrl} = req.body;
  const updatedUser = {};
  const _id = req.session.currentUser._id;
  

  if (username) {
    updatedUser.username = username;
    req.session.currentUser.username = username;
  }
  if (password) {      
    if (bcrypt.compareSync(oldpassword, req.session.currentUser.password)) {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPass = bcrypt.hashSync(password, salt);
      updatedUser.password = hashPass;
    }else res.status(406).json("Old password doesn't match");
  }
  if (photoUrl) {
    updatedUser.photoUrl = photoUrl;
    req.session.currentUser.photoUrl = photoUrl;
  }
  
  User.updateOne({_id},updatedUser)
    .then( () =>res.status(200).send())
    .catch( err => res.status(400).json({message:'Username already in use',err}));
})

module.exports = router;