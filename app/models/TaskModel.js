import Mongoose from 'mongoose'
import TaskSchema from './../schemas/TaskSchema'
module.exports = Mongoose.model("TaskModel", TaskSchema)