const express = require('express');
const router = express.Router();
const User = require('./../../models/User');

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

  
  router.put('/update', isLoggedIn, (req, res,next) => {
    console.log(req.body);
    const {username} = req.body;
    const _id = req.session.currentUser._id;
    
    User.updateOne({_id},{username})
      .then( () =>res.status(200).send())
  })

module.exports = router;