<template>
  <div class="Right-container">
    <h3>Right组件</h3>
    <button @click="postInfo">Post请求</button>
  </div>
</template>

<script>
export default {
  methods: {
    async postInfo () {
      const { data: res } = await this.$http.post('/api/post', { name: 'ls', age: 14 })
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.Right-container{
  background-color:orange;
  min-height: 200px;
  flex: 1;
}
</style>
