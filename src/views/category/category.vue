<!-- 分类页面 -->
<template>
  <div id="category">
    <!-- 顶部导航栏 -->
    <categorynavBar></categorynavBar>
    <div class="content">
      <!-- 侧边导航栏 -->
      <tab-menu :tabMenuList="tabMenuList" @menuclick="menuclick"></tab-menu>
      <div class="content-right">
      <!-- 吸顶效果的分类控制栏 -->
        <tabControl
          class="tabcopy"
          :titles="titles"
          @tabClick="tabClick"
          ref="tabControlcopy" 
          v-if="isTabFixed"
        ></tabControl>
        <scroll
          class="con-wrapper"
          :pullUpLoad="true"
          ref="scroll"
          :probe-type="3"
          @scroll="contentScroll"
        >
          <!-- 详细分类 -->
          <tab-content-menu :contentmenus="contentmenus"></tab-content-menu>
          <!-- 分类控制栏 -->
          <tabControl
            :titles="titles"
            @tabClick="tabClick"
            ref="tabControl"
          ></tabControl>
          <!-- 具体商品 -->
          <goodsList :goods="showgoods" class="goods"></goodsList>
        </scroll>
      </div>
      <!-- 回到顶部 -->
      <backTop v-show="isShowBackTop" @click.native="backtop"></backTop>
    </div>
  </div>
</template>

<script>
import {
  getcategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";

import scroll from "components/common/scroll/scroll";
import goodsList from "components/content/goods/goodsList";
import tabControl from "components/content/tabControl/tabControl";
import backTop from "components/content/backTop/backTop";

import categorynavBar from "./childComps/categorynavBar";
import tabMenu from "./childComps/tabMenu";
import tabContentMenu from "./childComps/tabContentMenu";

export default {
  name: "category",
  data() {
    return {
      tabMenuList: [],
      maitKey: 0,
      miniWallkey: 0,

      //详细分类的数组
      contentmenus: [],
      //商品分类
      titles: ["综合", "新品", "销量"],
      isTabFixed:false,
      tabOffsetTop: 0,
      //当前页面类型
      currenttype: "pop",
      //商品数据
      goods: {
        pop: { list: [] },
        new: { list: [] },
        sell: { list: [] },
      },
      //回到顶部是否显示
      isShowBackTop: false,
    };
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getcategory();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.$bus.$on("cateload", () => {
      this.$refs.scroll && this.$refs.scroll.refresh();
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    });
  },
  components: {
    categorynavBar,
    tabMenu,
    scroll,
    tabContentMenu,
    tabControl,
    goodsList,
    backTop,
  },

  computed: {
    showgoods() {
      return this.goods[this.currenttype].list;
    },
  },

  methods: {
    //获取侧边分类
    getcategory() {
      getcategory().then((res) => {
        // console.log(res)
        //侧边栏的数据
        this.tabMenuList = res.data.category.list;
        //默认展现的详细分类
        this.maitKey = this.tabMenuList[0].maitKey;
        this.getSubcategory(this.maitKey);
        //默认展示的商品
        this.miniWallkey = this.tabMenuList[0].miniWallkey;
        this.type = "pop";
        this.getCategoryDetail(this.miniWallkey, this.type);
      });
    },
    //获取详细分类
    getSubcategory(maitKey) {
      getSubcategory(maitKey).then((res) => {
        // console.log(res)
        this.contentmenus = res.data.list;
      });
    },
    //获取具体商品
    getCategoryDetail(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then((res) => {
        // console.log(res);
        this.goods[type].list = res;
      });
    },

    //点击事件
    //监听侧边菜单被点击
    menuclick(maitKey, miniWallkey) {
      this.maitKey = maitKey;
      this.getSubcategory(maitKey);
      this.miniWallkey = miniWallkey;
      this.currenttype = "pop";
      this.getCategoryDetail(this.miniWallkey, this.currenttype);
      console.log(this.miniWallkey, this.currenttype);
      this.$refs.tabControl.activetitle = 0;
      this.$refs.scroll.scrollTo(0, 0, 0);
    },
    //商品分类导航被点击
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
      this.getCategoryDetail(this.miniWallkey, this.currenttype);
      this.$refs.tabControl.activetitle = index;
      this.$refs.tabControlcopy.activetitle = index
    },
    //回到顶部被点击
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    //滑动事件
    contentScroll(position) {
      //判断backtop是否显示
      if (-position.y > 1000) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
      // console.log(-position.y,(this.tabOffsetTop))
      if(-position.y >this.tabOffsetTop){
        this.isTabFixed=true;
      }else{
        this.isTabFixed=false;
      }
      
    },
  },
};
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
#category {
  height: 100vh;
}
.content {
  position: fixed;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
.content-right{
  flex: 1;
  
}
.tabcopy{
  position: fixed;
  z-index: 9;
  left: 100px;
  right: 0;
  top: 44px;
}
.con-wrapper {
  height: 100%;
}
.goods {
  padding: 10px 5px;
}
</style>