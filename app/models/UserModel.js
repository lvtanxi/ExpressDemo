import UserSchema from './../schemas/UserSchema'
import Mongoose from "mongoose"

module.exports = Mongoose.model("UserModel", UserSchema)