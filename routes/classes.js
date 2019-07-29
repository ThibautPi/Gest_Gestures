const express = require('express');
const router = require('express-promise-router')();

const classController = require('../controllers/classes');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

router.route('/')
  .get(classController.getAll)
  .post(validateBody(schemas.postGestureClass),classController.post);

router.route('/:gesture_class_id')
  .get(validateParam(schemas.idSchema,'gesture_class_id'),classController.get)
  .put(validateParam(schemas.idSchema,'gesture_class_id'),validateBody(schemas.putGestureClass),classController.put)
  .delete(validateParam(schemas.idSchema,'gesture_class_id'),classController.delete);

router.route('/:gesture_class_id/samples')
  .get(validateParam(schemas.idSchema,'gesture_class_id'),classController.getsamples)

module.exports = router;
