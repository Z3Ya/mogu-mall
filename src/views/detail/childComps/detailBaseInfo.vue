<!-- 详情页商品顶部的信息 -->
<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="service"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  components: {},

  computed: {},

  methods: {},

  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang='css' scoped>
/* @import url(); 引入css类 */
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
  .title {
    color: #222
  }

  .info-price {
    margin-top: 10px;
  }

  .info-price .newPrice {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .info-price .oldPrice {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

.info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }

.info-columns {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  line-height: 30px;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.service img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.service span {
  font-size: 13px;
  color: #333;
}
</style>