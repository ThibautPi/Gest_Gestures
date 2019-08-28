const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');

const passportConf = require('../passport');
const sampleController = require('../controllers/samples');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');
const passportFirebase = passport.authenticate('firebase-auth',{session:false});
const passportJWT = passport.authenticate('jwt',{session:false});

router.route('/')
  .post(passportFirebase,validateBody(schemas.postGestureSample),sampleController.post);

router.route('/:gesture_sample_id')
  .get(passportFirebase,validateParam(schemas.idSchema,'gesture_sample_id'),sampleController.get)
  .put(passportFirebase,validateParam(schemas.idSchema,'gesture_sample_id'),validateBody(schemas.putGestureSample),sampleController.put)
  .delete(passportFirebase,validateParam(schemas.idSchema,'gesture_sample_id'),sampleController.delete);

module.exports = router;