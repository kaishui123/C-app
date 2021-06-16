<template>
  <van-tabbar fixed route>
    <van-tabbar-item icon="home-o" :to="{ name: 'home' }">
      首页
    </van-tabbar-item>
    <van-tabbar-item icon="apps-o" :to="{ name: 'classify' }">
      分类
    </van-tabbar-item>
    <van-tabbar-item icon="cart-o" :to="{ name: 'shopping' }">
      购物车
    </van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/my"> 我的 </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {};
</script>

<style>
</style>