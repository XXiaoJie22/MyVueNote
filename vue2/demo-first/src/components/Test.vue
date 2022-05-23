<template>
    <!-- 只能有一个根元素节点 -->
    <div class="box">
        <h1>这是用户创建的结构 --- {{ username }}</h1>
        <button @click="change_name">改变用户名</button>
        <h2>{{ str }}</h2>
        <!-- 加v-bind 由于里面写的是js语句，可以让这个字符串9变成数字9 -->
        <Mycount :init = "9"></Mycount>
    </div>
</template>

<script>
// 接收兄弟组件的信息
import bus from './eventBus.js'

// 默认导出，固定写法
export default {
    // data数据源
    // 注意 vue组件中的data不能指向对象，必须是一个函数
    data(){
        // return 出去的{}中，定义数据
        return {
            username: "XiaoJie",
            str: 'Test组件的信息',
        };   
    },
    methods: {
        change_name(){
            // 在组件中，this表示当前组件的实例对象
            this.username = "XiaoMing"
        }
    },
    // 当前组件的侦听器
    watch: {},
    // 当前组件的计算属性
    compute: {},
    // 当前组件的过滤器
    filters: {},
    created(){
        // 事件监听，这里监听send这一事件
        bus.$on('send',val => {
            this.str = val;
        });
    },
}
</script>

// css语法
<style scoped>
.box {
    background-color: pink;
}
</style>
// less语法
<style lang="less" scoped>
.box{
    h1 {
        color: red;
    }
}
// 由于写了scoped，css就只能影响该组件的样式
// 想要改变插入的组件样式，前面要加/deep/
// 当使用第三方组件库的时候，如果有修改第三方组件默认样式的需求，需要用到/deep/
/deep/ .C-h1{
    color: blue;
}
</style>