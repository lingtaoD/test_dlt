

function $(id){
	return document.getElementById(id);
}

var login_a = document.getElementsByClassName("login_a")[0];//注册按钮
var sign_form = $("sign_form");  //登录页面
var register_div = $("register_div");//注册页面

var flag = false;
login_a.onclick = function(){
	email_tishi.style.display = "none";
	password_tishi.style.display = "none";
	if (!flag) {
		sign_form.style.display = "none";
		register_div.style.display = "block";
		login_a.innerHTML = "登录";
		flag = true;	
	}else if (flag == true) {
		sign_form.style.display = "block";
		register_div.style.display = "none";
		login_a.innerHTML = "注册";
		flag = false;
	}
}
var email_ipt = $("email_ipt");  // 登录界面输入邮箱框
var password_ipt = $("password_ipt");//登录界面输入密码框
var email_ipt1 = document.getElementsByClassName("email_ipt")[0];//注册界面邮箱输入框
var password_ipt1 = document.getElementsByClassName("password_ipt")[0]//注册界面密码输入框
var email_tishi = $("email_tishi");//  邮箱提示框
var password_tishi = $("password_tishi");//密码提示框
var sign_btn = $("sign_btn");//登录按钮
var gogo = $("gogo");//去未来按钮
var v_RegExp = /\w+@\w+\.(com)$/; //邮箱
var v_RegExp1 = /^(13|15|18)\d{9}$/;//手机号码
var arr = [];
arr[0] = password_ipt;
arr[1] = password_ipt1;
for(var i = 0;i < arr.length;i++){
	arr[i].onfocus = password_focus;
	arr[i].onblur = password_blur;
}
var arr1 = [];
arr1[0] = email_ipt;
arr1[1] = email_ipt1;
for(var i = 0;i < arr1.length;i++){
	arr1[i].onfocus = email_focus;
}
function email_focus(){
	this.style.background = "white";
	this.placeholder = "";
	this.style.color = "black";
}
//登录页面邮箱框焦点移开
email_ipt.onblur = function(){
	email_ipt.style.background = "#4c83ad";
	email_ipt.placeholder = "邮箱或手机号";
	if (email_ipt.value == "") {
		email_tishi.style.display = "block";
		email_tishi.childNodes[1].innerHTML = "邮箱或手机号不能为空";
	}
	else if (!((v_RegExp.test(email_ipt.value))||(v_RegExp1.test(email_ipt.value)))) {
	 	email_tishi.childNodes[1].innerHTML = "邮箱或手机号格式不正确";
	}else{
		email_tishi.style.display = "none";
	}
}
//注册页面邮箱框焦点移开
email_ipt1.onblur = function(){
	email_ipt1.style.background = "#4c83ad";
	email_ipt1.placeholder = "邮箱";
	if (email_ipt1.value == "") {
		email_tishi.style.display = "block";
		email_tishi.childNodes[1].innerHTML = "邮箱不能为空";
	}
	else if (!(v_RegExp.test(email_ipt1.value))) {
	 	email_tishi.childNodes[1].innerHTML = "邮箱格式不正确";
	}else{
		email_tishi.style.display = "none";
	}
}
//密码框聚焦
function password_focus(){
	this.style.background = "white";
	this.placeholder = "";
	this.style.color = "black";
}
//密码框焦点移开
function password_blur(){
	this.style.background = "#4c83ad";
	this.placeholder = "密码";
	if (this.value == "") {
		password_tishi.style.display = "block";
		password_tishi.childNodes[1].innerHTML = "密码不能为空";
	}else if (this.value.length <= 6) {
		password_tishi.childNodes[1].innerHTML = "密码不少于6位";
	}else{
		password_tishi.style.display = "none";
	}
}
//登录按钮事件
sign_btn.onclick = function(even){
	var eve = even || window.even;
	eve.preventDefault();
	if (email_ipt.value == "") {
		email_ipt.style.background = "white";
		email_ipt.placeholder = "";
		email_tishi.style.display = "block";
		email_tishi.childNodes[1].innerHTML = "邮箱或手机号不能为空";
	}else if (!((v_RegExp.test(email_ipt.value))||(v_RegExp1.test(email_ipt.value)))) {
		email_ipt.style.background = "white";
	 	email_tishi.childNodes[1].innerHTML = "邮箱或手机号格式不正确";
	}else if (password_ipt.value == ""){
		password_ipt.style.background = "white";
		password_ipt.placeholder = "";
		password_tishi.style.display = "block";
		password_tishi.childNodes[1].innerHTML = "密码不能为空";
	}
}
//去未来按钮事件
gogo.onclick = function(){
	if (email_ipt1.value == "") {
		email_ipt1.style.background = "white";
		email_ipt1.placeholder = "";
		email_tishi.style.display = "block";
		email_tishi.childNodes[1].innerHTML = "邮箱不能为空";
	}else if (!(v_RegExp.test(email_ipt1.value))) {
	 	email_tishi.childNodes[1].innerHTML = "邮箱格式不正确";
	}else if (password_ipt1.value == "") {
		password_ipt1.style.background = "white";
		password_ipt1.placeholder = "";
		password_tishi.style.display = "block";
		password_tishi.childNodes[1].innerHTML = "密码不能为空";
	}
}
//鼠标放在登录按钮上 小图片来回移动
var left_login = $("left_login");//登录键上面的向左小图标
var step = 0;
function float_left(){
	step += (195 - left_login.offsetLeft)/50;
	step = step * 1;
	left_login.style.left = left_login.offsetLeft + step + "px";	
}
var timer = null;
sign_btn.onmouseover = function(){
	timer = setInterval(float_left,30)
}
sign_btn.onmouseout = function(){
	clearInterval(timer);
	left_login.style.left = 175 + "px";
}
//第一屏底部的向下小箭头
// var login_next = $("login_next");
// console.log(login_next.offsetTop);
// function float_bottom(){
// 	step += (620 - login_next.offsetTop)/50;
// 	step = step * 1;
// 	login_next.style.top = login_next.offsetTop + step + "px";	
// }
// var timer1 = setInterval(float_bottom,30)
// login_next.onclick = function(){
// 	clearInterval(timer1);
// }


//第二屏时间尺
var tenContent = $("tenContent");

var left_next = $("left_next");
var right_next = $("right_next");
console.log(tenContent.offsetLeft);
left_next.onclick = function(){
	right_next.style.display = "block";
	var star1 = tenContent.offsetLeft;
	var timer5 = setInterval(moveLeft,1);
	function moveLeft(){
		star1 += 10;
		if (star1 == -8100) {
			return;
		}
		if (star1 % 1350 == 0) {
			clearInterval(timer5);
		}
		if (tenContent.offsetLeft == -1350) {
			left_next.style.display = "none";
		}
		if (tenContent.offsetLeft == -8120) {
			clearInterval(timer5);
		}
		tenContent.style.left = star1 + "px";
	}
	console.log(tenContent.offsetLeft);
}

right_next.onclick = function(){
	left_next.style.display = "block";
	var star = tenContent.offsetLeft
	var timer6 = setInterval(moveRight,1);
		function moveRight(){
		star -= 10;
		if (star % 1350 == 0) {
			clearInterval(timer6);
		}
		tenContent.style.left =  star + "px";
		if (tenContent.offsetLeft == -12150) {
			right_next.style.display = "none";
		}
	}
	console.log(tenContent.offsetLeft);
}


var mark_content = document.getElementsByClassName("mark_content");
for(var i = 0;i < mark_content.length;i++){
	mark_content[i].onmouseover = showFn;
	mark_content[i].onmouseout = hindFn;
}
var show_DIV;
function showFn(){
	this.childNodes[5].style.display = "block";

}
function hindFn(){
	this.childNodes[5].style.display = "none";
}
// 第三屏的轮播
var explore_ul = document.getElementsByClassName("explore_ul")[0];
var start = 0;
explore_ul.time = setInterval(move,1);
function move(){
	start--;
	if (start % 70 == 0) {
		clearInterval(explore_ul.time);
		setTimeout(function(){
			explore_ul.time = setInterval(move,1);
		},2000)
		if (start == -490) {
			start = 0;
		}
	}
	explore_ul.style.top = start + "px";
}

// // 第四屏
// var dv_div = document.getElementsByClassName("dv");
// for(var i = 0;i < dv_div.length;i++){
// 	dv_div[i].onmouseover = float_top;
// 	dv_div[i].onmouseout = float_none;
// }

// function float_top(e){
// 	var div_elem = this.childNodes[1].childNodes[1];

// 	div_elem.style.height = "70px";
// 	div_elem.style.lineHeight = "70px";
// }
// function float_none(e){
// 	var div_elem = this.childNodes[1].childNodes[1];
// 	div_elem.style.height = "130px";
// 	div_elem.style.lineHeight = "130px";
// }


//底部
var ios = document.getElementsByClassName("ios")[0];
var android = document.getElementsByClassName("android")[0];
ios.onmouseover = function(){
	this.childNodes[0].childNodes[0].src = "../img/whiteAp.png";
}
ios.onmouseout = function(){
	this.childNodes[0].childNodes[0].src = "../img/blueApple.png";
}
android.onmouseover = function(){
	this.childNodes[0].childNodes[0].src = "../img/whiteAd.png";
}
android.onmouseout = function(){
	this.childNodes[0].childNodes[0].src = "../img/blueAd.png";
}