<template>
  <div id="app">
    <h1>countFromSon  {{ countFromC }} </h1>
    <!-- 以标签形式使用注册好的组件 -->
    <Test></Test><Mycount @numberChange="show"></Mycount>
  </div>
</template>


<script>
// 导入需要用的vue组件
import Test from '@/components/Test.vue'



// 默认导出，固定写法
export default {
    // data数据源
    // 注意 vue组件中的data不能指向对象，必须是一个函数
    data(){
        // return 出去的{}中，定义数据
        return {
            username: "XiaoJie",
            countFromC: 0
        };   
    },
    methods: {
        change_name(){
            // 在组件中，this表示当前组件的实例对象
            this.username = "XiaoMing"
        },
        // 接收子组件的数据
        show(val){
          this.countFromC = val;
        }

    },
    // 当前组件的侦听器
    watch: {},
    // 当前组件的计算属性
    compute: {},
    // 当前组件的过滤器
    filters: {},
    // 注册导入的组件
    components: {
      Test
    }
}
</script>

// 加上scoped 可以让该css只影响该组件,而不影响其他组件
<style lang="less" scoped>
#app {
  h1{
    color: pink;
  }
}
</style>
