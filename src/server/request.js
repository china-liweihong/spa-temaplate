import axios from 'axios';
import { Toast } from 'vant';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API, // api 的 base_url
  timeout: 60000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    Toast.loading({
      message: '加载中...'
    });
    config.headers['token'] = 'f47d9a95cdef2e8ec8c2794704ab2210';
    console.log('发起请求');
    return config;
  },
  error => {
    console.log('请求发送失败');
    // Do something with request error
    console.log(error); // for debug
    Toast.fail(error.message);
    return Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    console.log('请求响应成功');
    console.log(response);
    Toast.clear();
    //  接口在请求地址错误时依然返回200，在响应体response中返回status 需要判断response的status是否存在和状态 reject错误
    return response.data;
  },
  error => {
    console.log('请求响应失败');
    console.log(error); // for debug
    if (error && error.response) {
      switch (error.response.status) {
        case 401: error.message = '未授权，请登录'; break;
        case 403: error.message = '拒绝访问'; break;
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break;
        case 408: error.message = '请求超时'; break;
        case 500: error.message = '服务器内部错误'; break;
        case 501: error.message = '服务未实现'; break;
        case 502: error.message = '服务器繁忙，请稍后再试'; break;
        case 503: error.message = '服务不可用'; break;
        case 504: error.message = '网关超时，请稍后再试'; break;
        case 505: error.message = 'HTTP版本不受支持'; break;
        default: break;
      }
    }
    Toast.fail(error.message);
    return Promise.reject(error);
  }
);

export default service;
