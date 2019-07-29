const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const Schema = mongoose.Schema;

const classSchema = new Schema({
    _id:{
        type: String,
        default: uuid
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    gesture_samples_id:[
        {type: String}
    ],
    gesture_set_id:{
        type:String,
        required: true
    }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}
});

const G_class = mongoose.model('g_class', classSchema);

module.exports = G_class;