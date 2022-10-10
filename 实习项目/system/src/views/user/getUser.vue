<template>
  <div class="user-container">
    <!-- 头部区域 -->
    <div class="user-head">
      <el-page-header @back="goBack" content="查看个人信息" title=""> </el-page-header>
    </div>
    <br />
    <hr />
    <br />

    <div class="user-body">
      <el-descriptions class="margin-top" title="个人信息" :column="3" size="big" border>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            用户名
          </template>
          {{ usermsg[0].username }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          {{ usermsg[0].phone }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            居住地
          </template>
          {{ usermsg[0].local }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            生日
          </template>
          {{ usermsg[0].date }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
          </template>
          {{ usermsg[0].place }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
import bus from '@/evenBus.js'
export default {
  data() {
    return {
      usermsg: [],
      id: '0',
      id2: ''
    }
  },
  methods: {
    goBack() {
      // 传数据
      bus.$emit('send', { id: this.id, id2: this.id2 })

      this.$router.push({ path: '/home', query: { username: this.$route.query.username } })
    }
  },
  async created() {
    const { data: res } = await this.$http.post('http://127.0.0.1:8000/api/loginUser', { params: { username: this.$route.query.username } })
    this.usermsg = res.data
    // console.log(this.usermsg)
  }
}
</script>

<style lang="less" scoped></style>
