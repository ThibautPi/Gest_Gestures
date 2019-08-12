const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');

const passportConf = require('../passport');
const setController = require('../controllers/sets');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

const passportJWT = passport.authenticate('jwt',{session:false});

router.route('/')
  .post(passportJWT,validateBody(schemas.postGestureSet),setController.post)
  .get(passportJWT,setController.getAll);

router.route('/:gesture_set_id')
  .get(passportJWT,validateParam(schemas.idSchema,'gesture_set_id'),setController.get)
  .put(passportJWT,validateParam(schemas.idSchema,'gesture_set_id'),validateBody(schemas.putGestureSet),setController.put)
  .delete(passportJWT,validateParam(schemas.idSchema,'gesture_set_id'),setController.delete);

router.route('/:gesture_set_id/classes')
  .get(passportJWT,validateParam(schemas.idSchema,'gesture_set_id'),setController.getclasses)

module.exports = router;
