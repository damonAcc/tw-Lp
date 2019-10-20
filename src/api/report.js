import { request } from './requset'

let basePath = 'http://47.56.199.89:3000/'
basePath = 'http://localhost:3000/'

export const reportSubmit = data => {
    return request({
        url: basePath + "report/addReport",
        method: "post",
        data
    })
}