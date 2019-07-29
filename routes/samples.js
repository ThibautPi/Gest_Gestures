const express = require('express');
const router = require('express-promise-router')();

const sampleController = require('../controllers/samples');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

router.route('/')
  .get(sampleController.getAll)
  .post(validateBody(schemas.postGestureSample),sampleController.post);

router.route('/:gesture_sample_id')
  .get(validateParam(schemas.idSchema,'gesture_sample_id'),sampleController.get)
  .put(validateParam(schemas.idSchema,'gesture_sample_id'),validateBody(schemas.putGestureSample),sampleController.put)
  .delete(validateParam(schemas.idSchema,'gesture_sample_id'),sampleController.delete);

module.exports = router;