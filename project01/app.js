//引入数据库

//引入body-parser
const bodyParser=require('body-parser');
//引入express模块
const express=require('express');
//引入路由器
const myuser=require('./router/myuser.js');
var app=express();
app.listen(3000);
//托管到静态文件public
app.use(express.static('./public'));
//使用body-parser中间件来将post请求的数据解析为对象
//设置必须放在路由之前，只有设置好了，才能使用req.body
app.use(bodyParser.urlencoded({
	extended:false
}));

//挂载路由器
app.use('/myuser',myuser);