import Mongoose from 'mongoose'
import TaskSchema from './../schemas/TaskSchema'
export default Mongoose.model("TaskModel", TaskSchema)