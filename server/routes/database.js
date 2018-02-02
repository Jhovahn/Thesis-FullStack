const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers').Profiles;

router.route('/database')
  .get(ProfileController.getAll)
  // .post(ProfileController.create)
  ;