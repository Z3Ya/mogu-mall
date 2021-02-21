<!-- 详情页 -->
<template>
  <div id="detail">
    <navBar class="detailNav"></navBar>
    <scroll class="wrapper" ref="scroll" :pullUpLoad="true"> 
      <detail-swiper v-if="topimage.length>0" :topimage="topimage"></detail-swiper>
      <detail-base-info  :goods="goods"></detail-base-info>
      <detail-shop-info  :shop="shop"></detail-shop-info>
      <ul>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import { getDetail, Goods, Shop } from "network/detail.js";

import scroll from "components/common/scroll/scroll";

import navBar from "./childComps/detailNavBar";
import detailSwiper from "./childComps/detailSwiper";
import detailBaseInfo from "./childComps/detailBaseInfo";
import detailShopInfo from "./childComps/detailShopInfo";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topimage: [],
      goods: {},
      shop: {},
    };
  },

  components: {
    navBar,
    scroll,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
  },

  computed: {},

  methods: {
    //请求资源的方法
    getDetail() {
      //1、保存传入的iid
      this.iid = this.$route.query.iid;
      //2、根据iid请求详情数据--network
      getDetail(this.iid).then((res) => {
        let data = res.result;
        console.log(data);
        //获取轮播图信息
        this.topimage = res.result.itemInfo.topImages;
        //获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        //获取店铺信息
        this.shop = new Shop(data.shopInfo);
        //获取商品详情信息

        //获取参数信息

        //获取评论细信息
      });
    },
    //防抖函数debounce和节流函数throttle
    //防抖函数：是函数在特定的时间内不被再调用后执行
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getDetail();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // const refresh = this.debounce(this.$refs.scroll.refresh, 500);
    // this.$bus.$on("detailImgLoad", () => {
    //   refresh();
    // });
  },
};
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
#detail {
  height: 100%;
  position: relative;
  z-index: 2;
  background-color: #fff;
}
.detailNav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.wrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
}
</style>