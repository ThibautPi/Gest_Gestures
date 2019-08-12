const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const Schema = mongoose.Schema;

const setSchema = new Schema({
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
    gesture_classes_id:[
        {type: String}
    ],
    user_id:{
        type: String,
        required: true
    }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}
});

const G_Set = mongoose.model('g_set', setSchema);

module.exports = G_Set;