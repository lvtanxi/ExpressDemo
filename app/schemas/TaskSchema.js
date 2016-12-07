import Mongoose from 'mongoose'
import Moment from 'moment'


let TaskSchema = new Mongoose.Schema({
    message: String,
    createAt: String,
    updateAt: {
        type: Date,
        default: Date.now()
    }
})


TaskSchema.statics = {
    tasks(callback) {
        return this.find({})
            .exec(callback)
    },
    task (id, callback) {
        return this.findById({_id: id})
            .exec(callback)
    },
}

export default TaskSchema
