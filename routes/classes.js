const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');

const passportConf = require('../passport');
const classController = require('../controllers/classes');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

const passportJWT = passport.authenticate('jwt',{session:false});

router.route('/')
  .post(passportJWT,validateBody(schemas.postGestureClass),classController.post);

router.route('/:gesture_class_id')
  .get(passportJWT,validateParam(schemas.idSchema,'gesture_class_id'),classController.get)
  .put(passportJWT,validateParam(schemas.idSchema,'gesture_class_id'),validateBody(schemas.putGestureClass),classController.put)
  .delete(passportJWT,validateParam(schemas.idSchema,'gesture_class_id'),classController.delete);

router.route('/:gesture_class_id/samples')
  .get(passportJWT,validateParam(schemas.idSchema,'gesture_class_id'),classController.getsamples)

module.exports = router;
