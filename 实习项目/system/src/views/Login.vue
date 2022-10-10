<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 登录表单 -->
      <div class="login-form">
        <div class="login-name">
          <label for="username">登录名称:</label>
          <el-input v-model="username" placeholder="请输入用户名" id="username" class="ab"></el-input>
        </div>
        <div class="login-password">
          <label for="password">登录密码:</label>
          <el-input placeholder="请输入密码" v-model="password" show-password id="password" class="ab"></el-input>
        </div>
        <div class="login-button">
          <el-button type="primary" round @click="login">登录</el-button>
          <el-button type="info" round @click="reset">重置</el-button>
        </div>
      </div>
      <div class="tip" v-show="flag"><span>登录名称或密码填写错误</span></div>
      <div class="tip" v-show="flag2"><span>登录名称或密码不能为空</span></div>
    </div>
  </div>
</template>

<script>
import bus from '@/evenBus.js'

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      // 控制密码错误的提示
      flag: 0,
      // 控制密码不能为空的提示
      flag2: 0
    }
  },
  methods: {
    // 重置功能
    reset() {
      this.username = ''
      this.password = ''
    },
    // 登录功能
    async login() {
      // 每次点击初始化一下
      this.flag = 0
      this.flag2 = 0
      // 名称和密码不能为空
      if (this.username == '' || this.password == '') {
        // 登录失败
        localStorage.removeItem('token')
        this.flag2 = 1
      } else {
        // 请求后端登录接口
        const { data: res } = await this.$http.post('http://127.0.0.1:8000/api/getLogin', { params: { username: this.username, password: this.password } })
        // console.log(res.data)
        if (res.data.length != 0) {
          // 登录成功，给浏览器存储一个token
          localStorage.setItem('token', 'Bearer xxx')
          this.$router.push({ path: '/home', query: { username: this.username } })
        } else if (!this.flag2) {
          // 登录失败
          localStorage.removeItem('token')
          this.flag = 1
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/bg1.jpg);
  .login-box {
    width: 300px;
    height: 200px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    .login-form {
      position: absolute;
      top: 50%;
      transform: translate(8%, -50%);
      .login-name {
        margin-bottom: 10px;
      }
      .login-password {
        margin-bottom: 10px;
      }
    }
  }
}
.ab {
  width: 200px;
}
.tip {
  color: red;
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -90%);
}
</style>
