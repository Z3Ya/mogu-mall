import Vue from "vue";
import VueRouter from "vue-router";

const detail = () => import('views/detail/Detail')

Vue.use(VueRouter);

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: ()=>import('views/home/home.vue')
  },
  {
    path: '/category',
    component: ()=>import('views/category/category.vue') 
  },
  {
    path: '/cart',
    component: ()=>import('views/cart/cart.vue')
  },
  {
    path: '/profile',
    component: ()=>import('views/profile/profile.vue')
  },
  {
    path: '/detail',
    component:detail,
    // meta: {
    //   keepAlive: false // 不需要被缓存
    // }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
