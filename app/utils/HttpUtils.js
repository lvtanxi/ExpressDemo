import fetch from 'node-fetch'

export default class HttpUtils {

    constructor() {
        this.method = "GET"
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    bindUrl(url) {
        this.url = url
        return this
    }

    bindHeaders(headers) {
        if (headers)
            this.headers = Object.assign(this.headers, headers)
        return this
    }

    psot() {
        this.method = "POST"
        return this;
    }


    bindParams(params) {
        this.params = params
        return this
    }


    bindOnFinish(onFinish) {
        this.onFinish = onFinish
        return this;
    }


    //执行
    execute() {
        let that = this
        this.handlerParam()
        fetch(this.url, {
            method: that.method,
            headers: that.headers,
            body: that.bodyJson
        })
            .then(response => {
                if (response.ok)
                    return response.json();
                throw new Error("服务器异常")
            })
            .then(responseJson => {
                if (that.onFinish)
                    that.onFinish(null, responseJson)
            })
            .catch(error => {
                if (that.onFinish)
                    that.onFinish(error.message)
            })
    }

    handlerParam() {
        if ("GET" === this.method && this.params) {
            let paramsArray = [];
            Object.keys(this.params).forEach(key => paramsArray.push(key + '=' + this.params[key]))
            if (this.url.search(/\?/) === -1) {
                this.url += '?' + paramsArray.join('&')
            } else {
                this.url += '&' + paramsArray.join('&')
            }
        } else if (this.params && "POST" === this.method) {
            this.bodyJson = JSON.stringify(this.params)
            console.log( this.bodyJson)
        }
    }
}

