import Express from 'express'
import TaskContr from "./../app/controllers/TaskContr"
let task = Express.Router();

task.get('/list', TaskContr.list);
task.post('/saveOrUpdate', TaskContr.saveOrUpdate);
task.post('/delete', TaskContr.del);

export default task


