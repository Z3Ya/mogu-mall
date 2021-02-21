import axios from 'axios';

//!7、暴露出去,别的文件引入的时候要用import {request} from './request.js'..本次在main。js中使用
export function request (config){
  //1、创建实例
  const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  //2、拦截器
  //请求成功
  instance1.interceptors.request.use(config=>{
    // console.log('来到了请求request拦截success中');
    return config
  }, err=>{
    // console.log('来到了请求request拦截failure中');
    // err.message='没网';
    throw err
  })

  //响应成功
  instance1.interceptors.response.use(config=>{
    // console.log('来到了响应response拦截success中');
    return config.data
  }, err =>{
    // console.log('来到了响应response拦截failure中');
    // err.message='错啦';
    //要抛出异常而不是返回结果
    throw err
  })

  //3、发送真正的网络请求
  return instance1(config)
}
