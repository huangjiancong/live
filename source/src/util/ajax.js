import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1:8080'
axios.defaults.baseURL = 'http://nodejs-dev1.default.10.2.2.130.xip.io'

export default {
    get(url, params = {}) {
        return axios.request({
            url,
            params,
            method: 'get',
            transformRequest: [(data) => {
                // 发送之前
                console.log('发送之前')
                return data;
            }],
            transformResponse: [(data) => {
                // 发送之后
                console.log('发送之后')
                return JSON.parse(data);
            }]
        })
    }

}



