// 路由接口

// 导入路由模块
const express = require('express');
const router = express.Router();

// 导入数据库模块
const db = require('./mysql.js');

  // const ad = '杰哥';
  // const ab = '广东省'
  // const ac = 'xiaojie'
  // // const ab = '666';
  // sql = 'update users set username = ? , local = ? where loginname = ?  ';
  // db.query(sql,[ad,ab,ac], (err,result)=>{
  //   if(err) return err.message;
  //   if(result.affectedRows ===1) {console.log('更新成功');}
  // });


// 登录时后端请求服务器接口
router.post('/getLogin', (req,res)=>{
  const username = req.body.params.username;
  const password = req.body.params.password;

  sql = 'select * from usersLogin where username = ? and password = ?';
  db.query(sql,[username,password], (err,result)=>{
    if(err) return err.message;
    const ob = {
      status: 0,
      msg: '请求成功',
      data: result
    }
    res.send(ob);
  });
})
// 通过登录名称查看信息
router.post('/loginUser', (req,res)=>{
  const username = req.body.params.username;

  sql = 'select * from users where loginname = ?';
  db.query(sql,username, (err,result)=>{
    if(err) return err.message;
    const ob = {
      status: 0,
      msg: '请求成功',
      data: result
    }
    res.send(ob);
  });
})

// 通过用户名查看信息
router.post('/getUser', (req,res)=>{
  const username = req.body.params.username;

  sql = 'select * from users where username = ?';
  db.query(sql,username, (err,result)=>{
    if(err) return err.message;
    const ob = {
      status: 0,
      msg: '请求成功',
      data: result
    }
    res.send(ob);
  });
})

// 修改信息接口
router.post('/updateUser', (req,res)=>{
  const form = req.body.params.form;
  const loginname = req.body.params.loginname;

  sql = 'update users set username = ? ,phone = ? , local = ? , date = ? , place = ? where loginname = ?';
  db.query(sql,[form.username,form.phone,form.local,form.date,form.place,loginname], (err,result)=>{
    if(err) return err.message;
    // console.log(result.affectedRows);
    // if(result.affectedRows ==1){
    //   const ob = {
    //     status: 0,
    //     msg: '请求成功',
    //     data: result
    //   }
    //   res.send(ob);
    // }
    const ob = {
      status: 0,
      msg: '请求成功',
      data: result.affectedRows
    }
    res.send(ob);
    
  });
})

module.exports = router