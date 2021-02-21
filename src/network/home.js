//该文件是首页所有网络请求的汇总

//引入网络请求的总配置
import {
  request
} from './request.js'

//轮播图数据请求
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
