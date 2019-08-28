const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');

const passportConf = require('../passport');
const classController = require('../controllers/classes');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');
const passportFirebase = passport.authenticate('firebase-auth',{session:false});
const passportJWT = passport.authenticate('jwt',{session:false});

router.route('/')
  .post(passportFirebase,validateBody(schemas.postGestureClass),classController.post);

router.route('/:gesture_class_id')
  .get(passportFirebase,validateParam(schemas.idSchema,'gesture_class_id'),classController.get)
  .put(passportFirebase,validateParam(schemas.idSchema,'gesture_class_id'),validateBody(schemas.putGestureClass),classController.put)
  .delete(passportFirebase,validateParam(schemas.idSchema,'gesture_class_id'),classController.delete);

router.route('/:gesture_class_id/samples')
  .get(passportFirebase,validateParam(schemas.idSchema,'gesture_class_id'),classController.getsamples)

module.exports = router;
