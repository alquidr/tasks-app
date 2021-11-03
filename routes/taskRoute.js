'use strict';
let express = require('express');
const router = express.Router({ mergeParams: true });
const {generateTask} = require('../controllers/taskController');
const { Task } = require('../models/taskModel');

//Generate Articles by a given number.
 router.post('/tasks/:quantity',async(req, res,next) =>  {
     try {
         let generateTasks = await generateTask(req.params.quantity)
         res.status(200).send(generateTasks);
     }
     catch{
         res.status(400);
     }
});

 //Get All Tasks
router.get('/tasks/',async(req, res,next) =>  {
    try {
        Task.find({
        }).then((tasks) => {
            res.send({ tasks });
        }, (e) => {
            res.status(400).send(e);
        });
    }
    catch{
        res.status(400);
    }
});

//Mark as done one task, given a taskId
router.put('/tasks/:taskId',async(req, res,next) =>  {
    try {
        let body = {state:'DONE'}
        let id = req.params.taskId
        Task.findOneAndUpdate({ _id: id},
            { $set: body },
            { new: true }).then((task) => {
            if (!task) {
                return res.status(404).send();
            }
            res.send({ task });
        }).catch((e) => {
            res.status(400).send(e);
        })
    }
    catch{
        res.status(400);
    }
});

module.exports = router;
