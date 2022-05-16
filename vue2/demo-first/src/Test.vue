<template>
    <div class="box">
        <h1>这是用户创建的结构 --- {{ username }}</h1>
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
}
</script>

<style>
.box {
    background-color: pink;
};
</style>