const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const Schema = mongoose.Schema;

const sampleSchema = new Schema({
    _id:{
        type: String,
        default: uuid
    },
    user_id:{
      type:Number,
      required:true
    },
    name:{
        type: String
    },
    description:{
        type: String
    },
    gesture_class_id:{
        type:String,
        required: true
    },
    sample_type:{
        type: String,
        enum: ['0D','1D','2D','2D1/2','3D','4D']
    },
    properties:[
        {
            type: String,
            enum: ['IsIsochronic','IsIsometric','IsIsoparameterized','IsPositionInvariant',
            'IsScaleInvariant','IsRotationInvariant']
        }

    ],
    strokes:[[
        {
            x:{
                type: Number,
                default : 0
            },
            y:{
                type: Number,
                default : 0
            },
            z:{
                type: Number,
                default : 0
            },
            w:{
                type: Number,
                default : 0
            },
            timestamp:{
                type: Number,
                default : 0
            }
        }
    ]]
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}
});

const G_sample = mongoose.model('g_sample', sampleSchema);

module.exports = G_sample;
