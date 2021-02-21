<!-- 商品详情页评论信息展示 -->
<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="header">
      <div class="title">用户评价</div>
      <div class="more">
        更多
        <i class="icon ion-chevron-right"></i>
      </div>
    </div>

    <div class="user">
      <img class="u-img" :src="commentInfo.user.avatar" alt=""  @load="detailimgload"/>
      <span class="u-name">{{ commentInfo.user.uname }}</span>
    </div>

    <div class="content">
      <p>{{ commentInfo.content }}</p>
      <div class="info-imgs">
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
          @load="detailimgload"
        />
      </div>
    </div>

    <div class="other">
      <span class="date">{{commentInfo.created | showDate }}</span>
      <span>{{ commentInfo.style }}</span>
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/utils.js";

export default {
  name: "detailCommentInfo",
  data() {
    return {
    };
  },

  props: {
    commentInfo: {
      type: Object,
    },
  },

  filters: {
    //将时间戳转换成时间格式化字符串
    //时间戳：15555555
    //1、时间戳以秒为单位，*1000，转换为以韩淼为单位。
    //2、将data格式化
    //data.getyear()+data.getmonth+...
		showDate(value) {
      let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
    }
  },

  components: {},

  computed: {},

  methods: {
    detailimgload(){
      this.$bus.$emit('detailimgload')
    }
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */

.header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.title {
  float: left;
  font-size: 15px;
}

.more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}

.icon {
  font-size: 13px;
}

.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}

.user {
  padding: 10px 0 5px;
  display: flex;
  align-items: center;
}

.u-img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.u-name {
    font-size: 15px;
    margin-left: 10px;
}

.content {
    padding: 0 5px 15px;
}

.comtent p{
   font-size: 14px;
    color: #777;
    line-height: 1.5;
}

  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }

.other{
  font-size: 12px;
    color: #999;
    margin-top: 10px;
}

.date{
  margin-right: 8px;
}

</style>