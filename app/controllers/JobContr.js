import HttpUtils from './../utils/HttpUtils'
import {resultHelp} from './../utils/ResultHelp'
import PromiseHttp from './../utils/PromiseHttp'

/**
 * 使用原生的http 做中间层
 * @type {{login: ((req, res?))}}
 */
export default {
        
    login(req, res){
        let param={
            "mobile":"15202842963",
            "userType":"1",
            "uuid":"428A57DB92ED686D2B1A04B2FE801CB8"
        }
        new HttpUtils()
            .psot()
            .bindUrl("http://10.13.3.19:16000/wmapp-server/common/getSmsCode")
            .bindParams(param)
            .bindOnFinish((error,data)=>{
                resultHelp(res,error,data)
            })
            .execute()
    },
    getJuHeData(req, res){
        let param={
            "mobile":"15202842963",
            "userType":"1",
            "uuid":"428A57DB92ED686D2B1A04B2FE801CB8"
        }

        PromiseHttp.post("http://10.13.3.19:16000/wmapp-server/app/getNewest",param)
            .then((json) => {
                console.log(json,">>>>>json>>>>>");
                return  PromiseHttp.post("http://10.13.3.19:16000/wmapp-server/common/getSmsCode",param)
            })
            .then(message=>{
                console.log(message,">>>>>message>>>>>");
            }).finally(()=>{
            console.log("finally");
        })
    }
}
