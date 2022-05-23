<template>
  <div class="">
    <h1 class="C-h1">Count 组件</h1>
    <p class="C-p">Count的值是 {{ count }}</p>
    <button @click="add">+1</button>
    <button @click="sendMsg">share</button>
  </div>
  
</template>


<script>
// 为了兄弟组件之间传输数据
import bus from './eventBus.js'

export default {
  // 自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  // props只读，不能修改
  // props: ['init'], // 数组格式不能指定默认值
  // 对象格式
  props: {
    init: {
      default: 1,  // 如果使用组件的时候没传init的值，则会启用默认值
      // init的值类型 使用组件时传的必须是这个值
      type: Number,
      // 必填项校验，使用组件时必须传改值
      require: true
    }
  },
  data(){
    return{
      count: this.init,
      str: '我是count模块的数据捏'
    }
  },
  methods: {
    add(){
      this.count+=1;
      // 子传数据给父组件
      this.$emit('numberChange', this.count);
    },
    sendMsg(){
      bus.$emit('send',this.str);
    }
  },
  // 当前组件的侦听器
  watch: {},
  // 当前组件的计算属性
  compute: {},
  // 当前组件的过滤器
  filters: {},

  // 生命周期函数，非常常用,此时ul还没生成
  // 经常在它里面,调用method方法,请求服务器的数据
  // 并且把请求到的数据,转存到data中,供template模板渲染的时候使用
  // create: {},
  // html结构渲染,最早在mounted函数里面操作页面
  // mounted: {},

}
</script>

<style>

</style>