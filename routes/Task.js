import express from 'express'
import TaskContr from "./../app/controllers/TaskContr"
let task = express.Router();

task.get('/list', TaskContr.list);
task.post('/saveOrUpdate', TaskContr.saveOrUpdate);
task.post('/delete', TaskContr.del);

export default task


