
//引入连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由
var myuser=express.Router();

//1.1,创建注册模块端口
myuser.post('/register',(req,res)=>{
	var $uname=req.body.uname;
	console.log(req.body);

	if(!$uname){
		res.send('用户名不存在');
		return;
	}
	var $upwd=req.body.upwd;
	if(!$upwd){
		res.send('密码不存在');
		return;
	}
	var $phone=req.body.phone;
	if(!$phone){
		res.send('手机号码不存在');
		return;
	}
	var $user_name=req.body.user_name;
	if(!$user_name){
		res.send('姓名不存在');
		return;
	}
	var $gender=req.body.gender;
	if(!$gender){
		res.send('性别不存在');
		return;
	}
	//插入数据
	var sql="insert into fk_user values(null,?,?,?,?,null,?) ";
	pool.query(sql,[$uname,$upwd,$phone,$user_name,$gender],(err,result)=>{
		if(err)throw err;
		res.send("注册成功");
	});
});

//1.2,检索用户信息
myuser.get('/checkUname',(req,res)=>{
	var $uname=req.query.uname;
	if(!$uname){
		res.send('用户名不存在');
		return;
	}
	//查询数据库
	var sql="select * from fk_user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(result.length>0){
			res.send(result);
		}else{
			res.send('0');
		}
	});
})

//2,登录接口login
myuser.post('/login',(req,res)=>{
	var $uname=req.body.uname
	if(!$uname){
		res.send({code:402,msg:'用户不存在'});
		return;
	}
	var $upwd=req.body.upwd;
	if(!$upwd){
		res.send({code:403,msg:'密码不能为空'});
		return;
	}
	//查询数据库
	var sql="select * from fk_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send('登录成功');
		}else{
			res.send('登录失败');
		}
	});
});
//导出路由器
module.exports=myuser;