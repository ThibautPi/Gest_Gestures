const G_Set = require('../models/sets');
const G_Sample = require('../models/samples');
const G_class = require('../models/classes');

module.exports = {
    getAll: async function(req,res,next){
        const sets = await G_Set.find({user_id : req.user});
        res.status(200).json(sets);
    },
    get: async function(req,res,next){
        const g_set = await G_Set.findById(req.value.params.gesture_set_id);
        if(g_set == null){
            return res.status(404).send({error: 'Gesture set doesn\'t exist'});
        }
        res.status(200).json(g_set)
    },
    getclasses: async function(req,res,next){
      const g_classes = await G_class.find({gesture_set_id : req.params.gesture_set_id});
      res.status(200).json(g_classes)
    },
    post: async function(req,res,next){
        console.log("Creating gesture set")
        const { name, description } = req.value.body;
        const user_id = req.user;
        const newG_Set = new G_Set({
            name: name,
            description: description,
            user_id : user_id
        });

        await newG_Set.save();

        res.status(200).json({newG_Set});
    },
    put: async function(req,res,next){
        const { name, description} = req.value.body;
        const g_set = name==null ?
            await G_Set.findByIdAndUpdate(req.value.params.gesture_set_id,{description},{new : true}):
            await G_Set.findByIdAndUpdate(req.value.params.gesture_set_id,{name,description},{new : true});
        if(g_set == null){
            return res.status(404).send({error: 'Gesture set doesn\'t exist'});
        }
        res.status(201).json(g_set)
    },
    delete: async function(req,res,next){
        const g_set = await G_Set.findById(req.value.params.gesture_set_id);
        if(g_set == null){
            return res.status(404).send({error: 'Gesture set doesn\'t exist'});
        }
        for(var i=0; i< g_set.gesture_classes_id.length;i++)
        {
            g_class = await G_class.findById(g_set.gesture_classes_id[i]);

            for(var j = 0; j < g_class.gesture_samples_id.length;j++)
            {
                await G_Sample.findByIdAndRemove(g_class.gesture_samples_id[j]);
            }
            await g_class.remove();
        }

        await g_set.remove();
        res.status(201).json(g_set);
    }

}
