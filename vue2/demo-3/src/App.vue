<template>
  <div>
    <h1>根组件</h1>
    <div class="container">
      <Left></Left>
      <Right></Right>
    </div>

  </div>
</template>

<script>
import Right from '@/components/Right-vue.vue'
import Left from '@/components/Left-vue.vue'
export default {
  components: {
    Right, Left
  }
}
</script>

<style lang="less" scoped>
.container{
  display: flex;
}
</style>
