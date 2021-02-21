<!-- 详情页 -->
<template>
  <div id="detail">
    <navBar class="detailNav" @titleclick="titleclick" ref="detailNav"></navBar>
    <scroll
      class="wrapper"
      ref="detailscroll"
      :pullUpLoad="true"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper
        v-if="topimage.length > 0"
        :topimage="topimage"
      ></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info ref="param" :paramInfo="paramInfo"></detail-param-info>
      <detailCommentInfo
        ref="comment"
        :commentInfo="commentInfo"
      ></detailCommentInfo>
      <detailRecommendInfo
        ref="recommend"
        :recommend="recommend"
      ></detailRecommendInfo>
    </scroll>
    <backTop @click.native="backTop" v-show="isShowBackTop"></backTop>
    <detailBottomBar @tocart="tocart"></detailBottomBar>
  </div>
</template>

<script>
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";

import scroll from "components/common/scroll/scroll";
import backTop from "components/content/backTop/backTop";

import navBar from "./childComps/detailNavBar";
import detailSwiper from "./childComps/detailSwiper";
import detailBaseInfo from "./childComps/detailBaseInfo";
import detailShopInfo from "./childComps/detailShopInfo";
import detailGoodsInfo from "./childComps/detailGoodsInfo";
import detailParamInfo from "./childComps/detailParamInfo";
import detailCommentInfo from "./childComps/detailCommentInfo";
import detailRecommendInfo from "./childComps/detailRecommendInfo";
import detailBottomBar from "./childComps/detailBottomBar";
import { mapActions } from 'vuex';

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topimage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      isShowBackTop: false,
    };
  },

  components: {
    navBar,
    scroll,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    detailRecommendInfo,
    backTop,
    detailBottomBar,
  },

  computed: {},

  methods: {
    //请求资源的方法
    getmethod() {
      //1、保存传入的iid
      this.iid = this.$route.query.iid;
      //2、根据iid请求详情数据--network
      getDetail(this.iid).then((res) => {
        let data = res.result;
        // console.log(data.itemInfo);
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
        this.detailInfo = data.detailInfo;
        //获取参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        //获取评论细信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }

        // this.$nextTick(() => {
        //   //获取导航对应的offsettop
        //   this.themeTopYs=[];
        //   this.themeTopYs.push(0);
        //   this.themeTopYs.push(-this.$refs.param.$el.offsetTop);
        //   this.themeTopYs.push(-this.$refs.comment.$el.offsetTop);
        //   this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop);
        // });
      });
      getRecommend().then((res) => {
        // console.log(res);
        this.recommend = res.data.list;
      });
    },

    //防抖函数
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },

    //导航栏点击函数
    titleclick(index) {
      // console.log(this.themeTopYs);
      this.$refs.detailscroll.scrollTo(0, this.themeTopYs[index], 100);
    },

    //监听滚动到的位置
    contentScroll(position) {
      //获取y值
      const positionY = position.y;
      //对比主题中的值
      let length = this.themeTopYs.length;
      for (let i in this.themeTopYs) {
        if (
          (i < length - 1 &&
            positionY <= this.themeTopYs[i] &&
            positionY > this.themeTopYs[i / 1 + 1]) ||
          (i == length - 1 && positionY <= this.themeTopYs[i])
        ) {
          this.$refs.detailNav.currentIndex = i;
          // console.log(this.$refs.detailNav.currentIndex)
        }
      }
    },

    //回到顶部
    backTop() {
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      //调用组件中的回到指定位置的方法
      this.$refs.detailscroll.scrollTo(0, 0, 200);
      this.$refs.detailNav.currentIndex = 0;
    },
    contentScroll(position) {
      //判断backtop是否显示
      if (-position.y > 1000) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
    },

    //获取引入的vuex中的action
    ...mapActions(['addCart']),
    //加入购物车
    tocart() {
      //1、获取需要添加到购物车的信息
      const produce = {};
      produce.iid = this.iid;
      produce.title = this.goods.title;
      produce.desc = this.goods.desc;
      produce.price = this.goods.nowPrice;
      produce.image = this.topimage[0];
      //2、将商品添加到购物车
      // console.log(produce)
      //同步操作
      // this.$store.commit('addCart',produce)
      //异步操作
      // this.$store.dispatch("addCart", produce)
      //   .then((res) => {
      //    console.log(res);
      //   });
      this.addCart(produce)
        .then((res) => {
        //  console.log(res);
        //  console.log(this.$toast.isshow);
        //  console.log(this.$toast);
         this.$toast.isshow(res,2000)
        });

        //判断购物车的全选
      this.$bus.$emit("checkBtnClick");

      //3、弹窗提醒添加到购物车成功。
    },
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getmethod();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // const refresh = this.debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("detailimgload", () => {
      this.$refs.detailscroll && this.$refs.detailscroll.refresh();
      //获取导航对应的offsettop
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.$refs.param && this.themeTopYs.push(-this.$refs.param.$el.offsetTop);
      this.$refs.comment &&
        this.themeTopYs.push(-this.$refs.comment.$el.offsetTop);
      this.$refs.recommend &&
        this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop);
    });
  },
};
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
#detail {
  height: 100vh;
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
  bottom: 58px;
}
</style>