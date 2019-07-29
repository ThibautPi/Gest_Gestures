const express = require('express');
const router = require('express-promise-router')();

const setController = require('../controllers/sets');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

router.route('/')
  .post(validateBody(schemas.postGestureSet),setController.post)
  .get(setController.getAll);

router.route('/:gesture_set_id')
  .get(validateParam(schemas.idSchema,'gesture_set_id'),setController.get)
  .put(validateParam(schemas.idSchema,'gesture_set_id'),validateBody(schemas.putGestureSet),setController.put)
  .delete(validateParam(schemas.idSchema,'gesture_set_id'),setController.delete);

router.route('/:gesture_set_id/classes')
  .get(validateParam(schemas.idSchema,'gesture_set_id'),setController.getclasses)

module.exports = router;
