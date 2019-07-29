const G_sample = require('../models/samples');
const G_class = require('../models/classes');

module.exports = {
    getAll: async function(req,res,next){
        const samples = await G_sample.find({});
        res.status(200).json(samples);
    },
    get: async function(req,res,next){
        const g_sample = await G_sample.findById(req.value.params.gesture_sample_id);
        if(g_sample == null){
            return res.status(404).send({error: 'Gesture sample doesn\'t exist'});
        }
        res.status(200).json(g_sample)
    },
    post: async function(req,res,next){
        const { name,user_id, description,gesture_class_id,sample_type,properties,strokes } = req.value.body;
        const g_class = await G_class.findById(gesture_class_id);
        if(g_class == null){
            return res.status(404).send({error: 'Gesture class doesn\'t exist'});
        }
        const newG_sample = new G_sample({
            name: name,
            user_id: user_id,
            description: description,
            gesture_class_id: gesture_class_id,
            sample_type: sample_type,
            properties: properties || [],
            strokes: strokes,
        })

        await newG_sample.save();

        g_class.gesture_samples_id.push(newG_sample._id);
        await g_class.save();

        res.status(200).json({newG_sample});
    },
    put: async function(req,res,next){
        const { name, description} = req.value.body;
        const g_sample = name==null ?
            await G_sample.findByIdAndUpdate(req.value.params.gesture_sample_id,{description},{new : true}):
            await G_sample.findByIdAndUpdate(req.value.params.gesture_sample_id,{name,description},{new : true});
        if(g_sample == null){
            return res.status(404).send({error: 'Gesture sample doesn\'t exist'});
        }
        res.status(200).json(g_sample)
    },
    delete: async function(req,res,next){
        const g_sample = await G_sample.findById(req.value.params.gesture_sample_id);
        if(g_sample == null){
            return res.status(404).send({error: 'Gesture sample doesn\'t exist'});
        }
        const g_class_id = g_sample.gesture_class_id;
        const g_class = await G_class.findById(g_class_id);
        g_class.gesture_samples_id.pull(g_sample._id);
        await g_class.save();
        await g_sample.remove();
        res.status(200).json(g_sample)
    }

}
