// 导入vue这个包  得到vue构造函数
import Vue from 'vue'
// 导入 APP.vue 根组件，将来要把app.vue 中的模板结构，渲染到html页面中
import App from './App.vue'
// 导入自定义组件
// import test from './components/Test.vue'


// 导入需要被全局注册的组件
import Count from '@/components/Count.vue'
Vue.component('Mycount',Count);


Vue.config.productionTip = false

// 创建vue实例对象
new Vue({
  // 把render函数指定的组件，渲染到html中
  render: h => h(App),
}).$mount('#app') // 等价于在实例对象里面写 el: '#app'
