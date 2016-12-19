import express from 'express'
import JobContr from "./../app/controllers/JobContr"
let job = express.Router();

job.get('/login', JobContr.login);
job.get('/getJuHeData', JobContr.getJuHeData);

export default job


