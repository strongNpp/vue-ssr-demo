import axios from 'axios'
import QS from 'qs'
// 基础信息
const service = axios.create({
    // 创建axios实例
    baseURL: `https://pre.9abox.net`, // api的base_url
    timeout: 600000, // 请求超时时间
    withCredentials: process.env.NODE_ENV == "production" ? true : false, // 允许跨域cookie true:允许 false:禁止
});
// 请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// 响应拦截器
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        return Promise.reject(error.response)
    }
)

// 封装get方法
function get(url, params) {
    return new Promise((resolve, reject) => {
        service
            .get(url, {
                params,
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}
// 封装jsonpost方法
function jsonPost(url, params, isLoad) {
    return new Promise((resolve, reject) => {
        service
            .post(url, params, {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    isLoad: isLoad || false,
                },
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err && err.desc);
            });
    });
}

// 封装post方法
function post(url, params, isLoad) {
    return new Promise((resolve, reject) => {
        service
            .post(url, QS.stringify(params, { arrayFormat: "brackets" }), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    isLoad: isLoad || false,
                },
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err && err.desc);
            });
    });
}

// 封装上传相关
function formDataPost(url, params, file) {
    // 封装post方法
    return new Promise((resolve, reject) => {
        var fm = new FormData();
        for (var key in params) {
            if (params[key] instanceof Array) {
                params[key].forEach(function (e) {
                    // fm.append(`${key}[]`, e);
                    fm.append(`${key}`, e);
                });
            } else {
                fm.append(key, params[key]);
            }
        }
        service
            .post(url, fm, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    isLoad: file == undefined ? true : false,
                },
                onUploadProgress: (progressEvent) => {
                    if (file && file != undefined) {
                        let num = ((progressEvent.loaded / progressEvent.total) * 100) | 0; //百分比
                        file.onProgress({ percent: num }); //进度条
                    }
                },

            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err && err.desc);
            });
    });
}

export { get, post, formDataPost, jsonPost };
