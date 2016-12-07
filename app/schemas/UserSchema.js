import Mongoose from 'mongoose'



let UserSchema = new Mongoose.Schema({
    userName: {
        unique: true,
        type: String
    },
    passWorld: String,
    createAt: {
        type: Date,
        default: Date.now()
    }
})
UserSchema.pre("save", (next) => {
    console.log(this)
   /* this.createAt = Date.now()*/
    next()
})


export default UserSchema
