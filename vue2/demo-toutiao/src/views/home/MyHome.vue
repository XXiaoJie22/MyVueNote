<template>
  <div>
    <van-nav-bar title="黑马头条" fixed placeholder />
  </div>
</template>

<script>
export default {
  name: 'MyHome'
}
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar {
  background-color: #007bff;
}
/deep/ .van-nav-bar__title {
  color: white;
}
</style>
