const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const controller = require('./controller');

router.route('/chella/lurk/:username')
      .post([
          // Validation middleware
          body('username').isString().isLength({ min: 1 }).trim().escape()
      ], controller.handleLurkCommand)
      .get(controller.handleLurkCommand);

router.route('/chella/creep/:username')
      .post([
          // Validation middleware
          body('username').isString().isLength({ min: 1 }).trim().escape()
      ], controller.handleCreepCommand)
      .get(controller.handleCreepCommand);

module.exports = router;