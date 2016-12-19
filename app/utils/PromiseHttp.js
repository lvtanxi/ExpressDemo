import fetch from 'node-fetch'
import Promise from 'bluebird'
export default class PromiseHttp {
    static post(url, formData, headers) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(formData),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.log(( "error,this status si " + response.status));
                    }
                })
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        })
    }

    static get(url, params, headers) {
        if (params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'GET',
                headers: headers,
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({status: response.status})
                    }
                })
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => {
                    reject({status: -1});
                })
        })
    }

}