import UserModel from './../models/UserModel'
import {resultHelp} from './../utils/ResultHelp'

export default {
    login(req, res){
        let _user = req.body
        UserModel.findOne({userName: _user.userName, passWorld: _user.passWorld}, (error, user) => {
            if (error)
                console.log(error)
            resultHelp(res, user ? null : "对不起，用户不存在！", user)
        })
    },
    register(req, res){
        let _user = req.body
        UserModel.findOne({userName: _user.userName}, (error, user) => {
            if (error)
                console.log(error)
            if (user) {
                resultHelp(res, "对不起，该用户名已经存在！")
                return
            }
            let newUser = new UserModel(_user)
            newUser.save(err => {
                resultHelp(res, err)
            })
        })
    }
}
