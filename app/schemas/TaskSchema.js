import Mongoose from 'mongoose'


let TaskSchema = new Mongoose.Schema({
    message: String,
    createAt: String,
    updateAt: {
        type: Date,
        default: Date.now()
    }
})

TaskSchema.pre("save", function (next) {
    this.updateAt = Date.now()
    next()
})

TaskSchema.statics = {
    tasks: function (callback) {
        return this.find({})
            .sort({'_id': -1})
            .exec(callback)
    },
    task: function (id, callback) {
        return this.findById({_id: id})
            .exec(callback)
    },
}

export default TaskSchema
