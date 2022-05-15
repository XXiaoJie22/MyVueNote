// es6导入语法
import $ from 'jquery'

// 导入样式(在webpack中，一切皆模块，都可以通过es6导入语法进行导入和使用)
import '@/css/index.css'
import './css/index.less'

// 引入图片，动态为html添加
import img from './img/蒂蒂.jpg'  // 小于limit的会转成base64字符串，大于的直接路径
// 动态赋值
 $('.box').attr('src', img);

// jquery 入口函数
$(function() {
    $('li:odd').css('background-color', 'pink');
    $('li:even').css('background-color', 'red');
});

// 高级js 测试
// function info(target){
//     target.info = 'Person info'
// };
// @info
// class Person {};

// console.log(Person.info);