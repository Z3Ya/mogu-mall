<!-- 首页 -->
<template>
  <div id="home">
    <!-- 导航栏 -->
    <Nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </Nav-bar>
    <tab-control
      class="tab-control-copy"
      :titles="['流程', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControlcopy"
      v-show="isTabFixed"
    ></tab-control>
    <!-- better-scroll组件 -->
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperimgload="swiperimgload" />
      <!-- 推荐信息的展示 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 种类图展示 -->
      <feature-view></feature-view>
      <tab-control
        class="tab-control"
        :titles="['流程', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>
      <!-- <goods-list :goods='goods[currenttype].list'></goods-list> -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <backTop @click.native="backTop" v-show="isShowBackTop"></backTop>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import scroll from "components/common/scroll/scroll";

import tabControl from "components/content/tabControl/tabControl";
import goodsList from "components/content/goods/goodsList";
import backTop from "components/content/backTop/backTop";

import HomeSwiper from "./childComps/HomeSwiper";
import recommendView from "./childComps/recommendView";
import featureView from "./childComps/featureView";

//引入网络请求相关数据
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currenttype: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      imgListen: null,
    };
  },

  components: {
    NavBar,
    HomeSwiper,
    recommendView,
    featureView,
    tabControl,
    goodsList,
    scroll,
    backTop,
  },

  computed: {
    showGoods() {
      return this.goods[this.currenttype].list;
    },
  },

  methods: {
    //网络请求的方法
    //首页相关图片数据的请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //首页商品数据的请求
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        //调用完成加载更多，才能进行下一次的加载更多
        this.$refs.scroll.finishPullUp();
      });
    },

    //事件监听的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currenttype = "pop";
          break;
        case 1:
          this.currenttype = "new";
          break;
        case 2:
          this.currenttype = "sell";
          break;
      }
      //使两个tabControl的当前标题显示一致
      this.$refs.tabControl.activetitle = index;
      this.$refs.tabControlcopy.activetitle = index;
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
    //通过this.$refs.tabControl拿到的是一个组件，组件是没有offsettop属性的，
    //所有的组件都有一个属性$el:用于获取组件中的元素
    swiperimgload() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    //better-scroll方法
    backTop() {
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      //调用组件中的回到指定位置的方法
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      //判断backtop是否显示
      if (-position.y > 1000) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
      console.log(-position.y, this.tabOffsetTop);
      //2、决定tabcontrol是否吸顶(position:fixed)
      if (-position.y > this.tabOffsetTop) {
        this.isTabFixed = true;
      } else {
        this.isTabFixed = false;
      }
    },
    loadMore() {
      //上拉加载更多
      this.getHomeGoods(this.currenttype);
    },
    //测试打印的方法
    // console() {
    //   setTimeout(() => {
    //     console.log(this.result);
    //   }, 5000);
    // },
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {
    //调用请求数据的方法进行数据请求
    this.getHomeMultidata(),
      //请求首页商品数据
      this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    //调用防抖动函数，用一个变量来接收这个函数的返回值，也就是原来传入的函数
    const refresh = this.debounce(this.$refs.scroll.refresh, 500);
    //事件总线监听图片加载完成的方法
    this.imgListen = () => {
      this.$refs.scroll.refresh();
    };
    this.$bus.$on("imgload", () => {
      // refresh()
      // this.$refs.scroll.refresh()
      this.imgListen();
    });
  },
  //让home保持原来的状态
  //1、app。vue中设置不要随意销毁，keep-alive
  //生命周期--活跃状态
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  //声明周期--不活跃状态
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    //不活跃的时候销毁监听
    this.$bus.$off("imgload", this.imgListen());
  },
};
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
#home {
  height: 100vh;
  /* padding-top: 44px; */
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* 在使用浏览器原生滚动的时候使用
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
   z-index: 9; */
}
/* .tab-control { */
/* 吸顶属性 使用BS后不支持 */
/* position: sticky; */
/* top: 44px; */
/* 显示最高级，不被覆盖 */
/* z-index: 9; */
/* } */
/* 在使用BS的时候，吸顶效果，通过复制一个tabcontrol，控制他是否显示代替 */
.tab-control-copy {
  position: relative;
  z-index: 9;
}

.wrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
</style>