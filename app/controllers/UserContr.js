import {resultHelp} from './../utils/ResultHelp'
import UserModel from './../models/UserModel'

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
            console.log(">>>find>>>>>", user)
            if (error)
                console.log(error)
            if (user) {
                console.log(">>>you>>>>>")
                resultHelp(res, "对不起，该用户名已经存在！")
                return
            }
            console.log(">>>>add>>>>")
            let newUser = new UserModel(_user)
            console.log(">>>>new>>>>")
            newUser.save(err => {
                console.log(">>>save>>>>>")
                resultHelp(res, err)
            })
        })
    }
}
