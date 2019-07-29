const G_class = require('../models/classes');
const G_Set = require('../models/sets');
const G_Sample = require('../models/samples');

module.exports = {
    getAll: async function(req,res,next){
        const classes = await G_class.find({});
        res.status(200).json(classes);
    },
    get: async function(req,res,next){
        const g_class = await G_class.findById(req.value.params.gesture_class_id);
        if(g_class == null){
            return res.status(404).send({error: 'Gesture class doesn\'t exist'});
        }
        res.status(200).json(g_class)
    },
    getsamples: async function(req,res,next){
      const g_samples = await G_Sample.find({gesture_class_id : req.params.gesture_class_id});
      res.status(200).json(g_samples)
    },
    post: async function(req,res,next){
        const { name, description,gesture_set_id } = req.value.body;
        const g_set = await G_Set.findById(gesture_set_id);
        if(g_set == null){
            return res.status(404).send({error: 'Gesture set doesn\'t exist'});
        }
        const newG_class = new G_class({
            name: name,
            description: description,
            gesture_set_id: gesture_set_id
        })

        await newG_class.save();

        g_set.gesture_classes_id.push(newG_class._id);
        await g_set.save();

        res.status(200).json({newG_class});
    },
    put: async function(req,res,next){
        const { name, description} = req.value.body;
        const g_class = name==null ?
            await G_class.findByIdAndUpdate(req.value.params.gesture_class_id,{description},{new : true}):
            await G_class.findByIdAndUpdate(req.value.params.gesture_class_id,{name,description},{new : true});
        if(g_class == null){
            return res.status(404).send({error: 'Gesture class doesn\'t exist'});
        }
        res.status(200).json(g_class)
    },
    delete: async function(req,res,next){
        const g_class = await G_class.findById(req.value.params.gesture_class_id);
        if(g_class == null){
            return res.status(404).send({error: 'Gesture class doesn\'t exist'});
        }
        for(var i=0; i< g_class.gesture_samples_id.length;i++)
        {
            await G_Sample.findByIdAndRemove(g_class.gesture_samples_id[i]);
        }

        //await Promise.all( g_class.gesture_samples_id.map( (id) => (G_Sample.findByIdAndRemove) ));

        const g_set_id = g_class.gesture_set_id;
        const g_set = await G_Set.findById(g_set_id);
        g_set.gesture_classes_id.pull(g_class._id);
        await g_set.save();
        await g_class.remove();
        res.status(200).json(g_class);
    }

}
