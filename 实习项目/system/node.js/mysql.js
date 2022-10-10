const mysql = require('mysql');
// 连接数据库
const db = mysql.createPool({
  host: '127.0.0.1',  // 数据库的ip地址
    user: '3119005184',  // 登录数据库的账号
    password: 'Gzj20010627', // 密码
    database: 'users' // 指定要操作的数据库
});

// 导出去供其他模块使用
module.exports = db