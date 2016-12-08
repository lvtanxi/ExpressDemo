import Mongoose from 'mongoose'
import ContactSchema from './../schemas/ContactSchema'
export default Mongoose.model("ContactModel",ContactSchema)