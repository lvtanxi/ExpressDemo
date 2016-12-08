import Express from 'express'
import ContactContr from './../app/controllers/ContactContr'

let contact = Express.Router()

contact.get("/contacts", ContactContr.contacts)

export default  contact
