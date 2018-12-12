function register()
		{
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function()
			{
				if(xhr.readyState==4&&xhr.status==200)
				{
					var res=xhr.responseText;
				}
			}
			xhr.open("post","/myuser/register",true);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			var formdata="uname="+uname.value+"&upwd="+upwd.value+"&phone="+phone.value+"&user_name="+user_name.value;
			xhr.send(formdata);
		}

//检查用户名是否有被占用
function checkUname()
{
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function()
	{
		if(xhr.readyState==4&&xhr.status==200)
		{var result=xhr.responseText;
			console.log(result);
			if(result==1){
				UName.innerHTML="可以注册";
			}else{
				UName.innerHtml="用户名被占用";
			}
		}
	}
	xhr.open("get","/myuser/checkUname?uname="+uname.value,true);
	xhr.send(null);
}























//获取焦点时
var form=document.forms[0];
var txtName=form.uname;
var txtUName=form.user_name;
var txtPwd=form.pwd;
var txtAPwd=form.agpwd;
var txtPhone=form.phone;
//1.姓名

//获取焦点时

//3.查找要修改的元素

//4.修改元素  的样式！

//2.邮箱
//3.密码
//4.再次确认密码
//5.手机

//失去焦点时


//单击提交时