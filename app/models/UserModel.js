import Mongoose from "mongoose"
import UserSchema from './../schemas/UserSchema'
export default Mongoose.model("UserModel", UserSchema)