import Mongoose from 'mongoose'

let ContactSchema = new Mongoose.Schema({
    name: String,
    phone: String,
    firstLetter: String,
    mailbox: String,
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }

})

ContactSchema.pre("save", function (next) {
    this.updateAt = Date.now();
    if (this.isNew) {
        this.createAt = this.updateAt
    }
    next();
})

ContactSchema.statics={
    contacts(callback){
        return this.find({})
            .sort({'_id': -1})
            .exec(callback)
    }
}

export default ContactSchema