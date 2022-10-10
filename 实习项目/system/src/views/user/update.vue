<template>
  <div class="update-container">
    <div class="update-head">
      <div class="user-head">
        <el-page-header @back="goBack" content="修改个人信息" title=""> </el-page-header>
      </div>
      <br />
      <hr />
      <br />
    </div>
    <div class="update-body">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="居住地">
          <el-input v-model="form.local"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="联系地址">
          <el-input v-model="form.place"></el-input>
        </el-form-item>

        <el-form-item class="sumbit">
          <el-button type="primary" @click="onSubmit">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import bus from '@/evenBus.js'
export default {
  data() {
    return {
      form: {
        username: '',
        phone: '',
        date: '',
        local: '',
        place: ''
      },
      id: '0',
      id2: ''
    }
  },
  async created() {
    const { data: res } = await this.$http.post('http://127.0.0.1:8000/api/loginUser', { params: { username: this.$route.query.username } })
    this.form.username = res.data[0].username
    this.form.phone = res.data[0].phone
    this.form.local = res.data[0].local
    this.form.date = res.data[0].date
    this.form.place = res.data[0].place
  },
  methods: {
    goBack() {
      // 传数据
      bus.$emit('send', { id: this.id, id2: this.id2 })

      this.$router.push({ path: '/home', query: { username: this.$route.query.username } })
    },
    async onSubmit() {
      // console.log(typeof this.form.date)

      // 判断生日是否更改
      if (typeof this.form.date != 'string') {
        // console.log(this.form.date.getFullYear())
        // console.log(this.form.date.getMonth())
        // console.log(this.form.date.getDate())

        const year = this.form.date.getFullYear()
        let month = this.form.date.getMonth() + 1
        let day = this.form.date.getDate()
        if (month < 10) {
          month = '0' + month
        }
        if (day < 10) {
          day = '0' + day
        }
        this.form.date = year + '-' + month + '-' + day
      }

      const { data: res } = await this.$http.post('http://127.0.0.1:8000/api/updateUser', { params: { form: this.form, loginname: this.$route.query.username } })
      // console.log(typeof res.data)
      if (res.data == 1) {
        this.$router.push({ path: '/home/success', query: { username: this.$route.query.username } })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.update-body {
  width: 400px;
  height: 80%;
  border-left: 1px solid rgb(252, 234, 234);
  border-right: 1px solid rgb(252, 234, 234);
  position: absolute;
  left: 55%;

  transform: translate(-50%, 0);
  padding: 5px;
}
.sumbit {
  position: absolute;
  top: 90%;
  left: 20%;

  // transform: translate(-50%, 0);
}
</style>
