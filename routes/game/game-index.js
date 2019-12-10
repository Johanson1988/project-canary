const express = require('express');
const router = express.Router();

// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
  } = require('../../helpers/middlewares');


  router.post('/', isLoggedIn, (req, res, next) => {
    res
        .status(200)
        .json({hola:'dola'});
  });

module.exports = router;