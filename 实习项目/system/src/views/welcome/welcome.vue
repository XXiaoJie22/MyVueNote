<template>
  <div>
    <el-container>
      <el-header>
        <h1>主页面</h1>
      </el-header>
      <el-main>
        <div class="main">
          {{ username }} ,
          <br />
          {{ hello }} !
          <br />
          欢迎您的登录
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: '',
      username: ''
    }
  },
  async created() {
    const date = new Date()
    const hour = date.getHours()
    if (hour > 0 && hour < 12) {
      this.hello = '上午好'
    } else if (hour > 12 && hour < 18) {
      this.hello = '下午好'
    } else {
      this.hello = '晚上好'
    }
    const { data: res } = await this.$http.post('http://127.0.0.1:8000/api/loginUser', { params: { username: this.$route.query.username } })
    this.username = res.data[0].username
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #d5e1f0;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.main {
  font-size: 20px;
}
</style>
