// 服务器

const express = require('express');
const app = express();

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// 解决接口跨域问题  
const cors = require('cors');
app.use(cors());

// 导入路由模块
const router = require('./router.js');
// 注册到app上
app.use('/api',router);

app.listen(8000,() =>{
  console.log('服务器已启动');
});