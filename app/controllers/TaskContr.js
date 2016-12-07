import TaskModel from './../models/TaskModel'
import {resultHelp} from './../utils/ResultHelp'
import _ from 'underscore'

export default  {

    list(req, res){
        TaskModel.tasks((err, tasks) => {
            resultHelp(res, err, tasks)
        })
    },

    saveOrUpdate(req, res){
        let taskObj = req.body
        let _task
        if (taskObj._id) {
            TaskModel.task(taskObj._id, (err, task) => {
                _task = _.extend(task, taskObj);
                _task.save(err => {
                    resultHelp(res, err)
                })
            })
        } else {
            _task = new TaskModel(taskObj)
            _task.save(err => {
                resultHelp(res, err)
            })
        }
    },

    del(req, res) {
        if (req.body.id) {
            TaskModel.remove({_id: req.body.id}, err => {
                resultHelp(res, err)
            })
        } else {
            resultHelp(res, "无效的id")
        }
    },

}
