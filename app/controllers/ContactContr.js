import ContactModel from './../models/ContactModel'
import {resultHelp} from './../utils/ResultHelp'
export default {
    contacts(req, res){
        ContactModel.find({}).sort({'_id': -1}).exec((error, datas) => {
            resultHelp(res, error, datas)
        })
    }
}