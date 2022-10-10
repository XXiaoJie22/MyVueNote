<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="[id]" :default-active="[id2]">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-user"></i>个人信息</template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="getUser">查看个人信息</el-menu-item>
            <el-menu-item index="2-2" @click="updateUser">修改个人信息</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <h3>Hi!&nbsp;&nbsp;{{ username }}&nbsp;&nbsp;&nbsp;</h3>
        <el-button size="mini" round @click="reset">退出</el-button>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import bus from '@/evenBus.js'
export default {
  data() {
    return {
      loginUsername: '',
      username: '',
      id: '0',
      id2: ''
    }
  },
  async created() {
    this.loginUsername = this.$route.query.username
    const { data: res } = await this.$http.post('http://127.0.0.1:8000/api/loginUser', { params: { username: this.loginUsername } })
    this.username = res.data[0].username
    // 接收传来的数据
    bus.$on('share', async () => {
      const { data: res1 } = await this.$http.post('http://127.0.0.1:8000/api/loginUser', { params: { username: this.loginUsername } })
      this.username = res1.data[0].username
    }),
      bus.$on('send', (val) => {
        this.id = val.id
        this.id2 = val.id2
      })
  },
  methods: {
    reset() {
      this.$router.push('/login')
      localStorage.removeItem('token')
    },
    getUser() {
      this.$router.push({ path: '/home/getUser', query: { username: this.loginUsername } })
      this.id = '1'
      this.id2 = '2-1'
    },
    updateUser() {
      this.$router.push({ path: '/home/updateUser', query: { username: this.loginUsername } })
      this.id = '1'
      this.id2 = '2-2'
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
h3 {
  display: inline-block;
}
</style>
