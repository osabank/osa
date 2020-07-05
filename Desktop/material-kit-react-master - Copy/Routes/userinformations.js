const router = require('express').Router();

// UserInformations Model
const UserInformations = require('../models/userinformations.model.js');

/**
 * @route   GET api/users
 * @desc    Get all users
 * @access  Private
 */

router.route('/').post((req, res) => {
  var userInfos = new UserInformations(req.body);
  userInfos.save(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});

module.exports = router;
