<template>
    <!-- 只能有一个根元素节点 -->
    <div class="box">
        <h1>这是用户创建的结构 --- {{ username }}</h1>
        <button @click="change_name">改变用户名</button>
        <Mycount></Mycount>
    </div>
</template>

<script>
// 默认导出，固定写法
export default {
    // data数据源
    // 注意 vue组件中的data不能指向对象，必须是一个函数
    data(){
        // return 出去的{}中，定义数据
        return {
            username: "XiaoJie",
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
    filters: {}
}
</script>

// css语法
<style>
.box {
    background-color: pink;
};
</style>
// less语法
<style lang="less">
.box{
    h1 {
        color: red;
    }
}
</style>