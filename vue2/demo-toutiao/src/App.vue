<template>
  <div id="app">
    <!-- 内部 -->
    <router-view></router-view>
    <!-- 底部 -->
    <van-tabbar v-model="active" placeholder>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
