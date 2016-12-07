import Express from 'express'
import UserContr from '../app/controllers/UserContr'
let user = Express.Router()

user.post('/login', UserContr.login);
user.post('/register', UserContr.register);

export default user
