<!-- 详情页顶部轮播图 -->
<template>
    <swiper class="detailswiper" v-if="topimage.length">
      <swiper-item class="item" v-for="(item,index) in topimage"  :key="index">
          <img :src="item" alt="" @load="detailimgload"/> 
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  data () {
    return {
      
    };
  },
  props: {
    topimage:{
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem

  },

  computed: {},

  methods: {
    detailimgload() {
      this.$bus.$emit('detailimgload')
    }
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
}
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
.item {
    text-align: center;
    height: 300px;
  }
</style>