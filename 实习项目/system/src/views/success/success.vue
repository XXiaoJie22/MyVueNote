<template>
  <div class="success">
    <el-col :sm="12" :lg="6">
      <el-result icon="success" title="修改成功" subTitle="可点击返回查看修改后的个人信息">
        <template slot="extra">
          <el-button type="primary" size="medium" @click="back">返回</el-button>
        </template>
      </el-result>
    </el-col>
  </div>
</template>

<script>
import bus from '@/evenBus.js'
export default {
  data() {
    return {
      id: '1',
      id2: '2-1'
    }
  },
  methods: {
    back() {
      bus.$emit('send', { id: this.id, id2: this.id2 })
      bus.$emit('share')
      this.$router.push({ path: '/home/getUser', query: { username: this.$route.query.username } })
    }
  }
}
</script>

<style lang="less" scoped>
.success {
  position: relative;
  top: 30%;
  left: 34%;
  // transform: translate(-50%, -50%);
}
</style>
