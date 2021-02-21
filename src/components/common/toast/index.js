import Toast from './toast'

const obj = {}

obj.install = (Vue) => {
  //main.js中vue.use了之后就会调用执行这个函数
  // console.log(Vue)
  //1、创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  //2、new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor ()

  //3、将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //4、toast.$el对应的就是挂载的div
  document.body.appendChild(toast.$el)

  //可以直接使用组件中的method方法
  Vue.prototype.$toast = toast;
}

export default obj