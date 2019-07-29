const Joi = require('joi');

module.exports = {
    validateParam: function (schema, name){
      return function (req,res,next) {
        const result = Joi.validate({ param: req['params'][name]} ,schema);
        if(result.error){
          return res.status(400).json(result.error);
        } else {
          if(!req.value)
            req.value = {};

          if(!req.value['params'])
            req.value['params'] = {};

          req.value['params'][name] = result.value.param;
          next();
        }
      }
    },

    validateBody: function (schema){
        return function(req,res,next) {
          const result = Joi.validate(req.body, schema);
          if(result.error){
            return res.status(400).json(result.error);
          }

          if(!req.value) {
            req.value = {};
          }
          req.value['body'] = result.value;
          next();
        }

      },

      schemas: {
        idSchema: Joi.object().keys({
          param: Joi.string().guid().required(),
        }),

        postGestureSet: Joi.object().keys({
          name: Joi.string().required(),
          description: Joi.string().allow("").optional()
        }),

        putGestureSet : Joi.object().keys({
          name: Joi.string(),
          description: Joi.string().allow("").optional()
        }),

        putGestureClass : Joi.object().keys({
          name: Joi.string(),
          description: Joi.string().allow("").optional()
        }),

        putGestureSample : Joi.object().keys({
          name: Joi.string(),
          description: Joi.string().allow("").optional()
        }),

        postGestureClass : Joi.object().keys({
          gesture_set_id: Joi.string().guid().required(),
          name: Joi.string().required(),
          description: Joi.string().allow("").optional()
        }),

        postGestureSample : Joi.object().keys({
          gesture_class_id: Joi.string().guid().required(),
          user_id: Joi.number().required(),
          name: Joi.string(),
          description: Joi.string().allow("").optional(),
          sample_type: Joi.string().valid('0D','1D','2D','3D','4D'),
          properties: Joi.array().items(Joi.string().valid('IsIsochronic','IsIsometric','IsIsoparameterized','IsPositionInvariant',
          'IsScaleInvariant','IsRotationInvariant')),
          strokes: Joi.array()
        })
      }
}
