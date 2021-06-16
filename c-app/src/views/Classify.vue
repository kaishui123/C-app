<template>
  <div class="classify-container">
    <div class="search-btn">
      <van-icon name="search" />
      <div>苹果特价1元一斤</div>
    </div>
    <OneTab />
  </div>
</template>

<script>
import OneTab from "@/components/OneTab.vue";
export default {
  components: {
    OneTab,
  },
};
</script>

<style lang="less" scoped>
.classify-container {
  width: 375px;
  .search-btn {
    width: 355px;
    height: 33px;
    line-height: 33px;
    background: #eee;
    margin: 11px auto 0;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
    color: #a1a1a1;
    > * {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>