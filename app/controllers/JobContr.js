import HttpUtils from './../utils/HttpUtils'
import {resultHelp} from './../utils/ResultHelp'
import PromiseHttp from './../utils/PromiseHttp'
import fs from 'fs'

/**
 * 使用原生的http 做中间层
 * @type {{login: ((req, res?))}}
 */
export default {

    login(req, res){
        let param = {
            "mobile": "15202842963",
            "userType": "1",
            "uuid": "428A57DB92ED686D2B1A04B2FE801CB8"
        }
        new HttpUtils()
            .psot()
            .bindUrl("http://10.13.3.19:16000/wmapp-server/common/getSmsCode")
            .bindParams(param)
            .bindOnFinish((error, data) => {
                resultHelp(res, error, data)
            })
            .execute()
    },

    getJuHeData(req, res){
        let param = {
            "mobile": "15202842963",
            "userType": "1",
            "uuid": "428A57DB92ED686D2B1A04B2FE801CB8"
        }

        PromiseHttp.post("http://10.13.3.19:16000/wmapp-server/app/getNewest", param)
            .then((json) => {
                console.log(json, ">>>>>json>>>>>");
                return PromiseHttp.post("http://10.13.3.19:16000/wmapp-server/common/getSmsCode", param)
            })
            .then(message => {
                console.log(message, ">>>>>message>>>>>");
            }).finally(() => {
            console.log("finally");
        })
    },

    loadImageByBuffer(){
        let path = __dirname + '/../../public/images/';
        fs.readFile(path + 'img.jpg', function (err, data) {
            if (err) {
                console.error(err);
                return;
            }
            console.log(Buffer.isBuffer(data));
            fs.writeFile(path + "log_buff.png", data, function (error) {
                if (error) console.log(error)
            })
            var base64Image = data.toString("base64")
            console.log(base64Image)
            var deImage = new Buffer(base64Image, "base64")
            console.log(Buffer.compare(data, deImage))
            fs.writeFile(path + "log_de.png", deImage, function (error) {
                if (error) console.log(error)
            })
        });
    },
    loadImageByStream(req, res){
        let path = __dirname + '/../../public/images/'
        let source = fs.readFileSync(path + 'img.jpg')
        fs.writeFileSync(path + 'source.jpg', source)


        let jsonPath = __dirname + '/../../public/javascripts/tasks.json'
        let jsonP = fs.createReadStream(jsonPath)
        jsonP.on("data", function (chunk) {
            console.log("data emits", Buffer.isBuffer(chunk), chunk.toString("utf-8"))
        }).on("readable", function () {
            console.log("readable");
        }).on("end", function () {
            console.log("end");
        }).on("close", function () {
            console.log("close");
        }).on("error", function (e) {
            console.log("error", e.message);
        })

    }


}
