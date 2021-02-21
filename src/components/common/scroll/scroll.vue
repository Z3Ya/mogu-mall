<!-- 移动端滚动组件 -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
    <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
 
export default {
  data () {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  components: {},

  computed: {},

  methods: {
    //回到指定位置的方法
    scrollTo(x,y,time) {
      //scroll的一个方法，可以回到指定的位置
      //参数：x坐标，y坐标，所需时间
      this.scroll&&this.scroll.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.scroll&&this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll&&this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll? this.scroll.y : 0;
    }
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    //?1、创建bs对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      //bs会导致div等的点击事件不生效，设置为true后即可以使用
      click: true,
      //该属性决定是否监听滚动的位置，默认为0 ，不监听，1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
      probeType: this.probeType,
      //momentum: true 是否开启拖动惯性
      pullUpLoad: this.pullUpLoad
    });
    //?2、监听滚动的位置
    //使用监听事件中使用位置则在on绑定 scroll(滚动时触发的事件），并传递一个参数既可获取xy的值
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    //?3、监听上拉加载更多事件
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
}
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */

</style>