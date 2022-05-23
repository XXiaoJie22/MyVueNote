<template>
  <div class="Left-container">
    <h3>Left组件</h3>
    <button @click="getinfo">Get 请求</button>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  methods: {
    async getinfo () {
      const { data: res } = await this.$http.get('/api/get')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.Left-container{
  background-color: skyblue;
  min-height: 200px;
  flex: 1;
}
</style>
