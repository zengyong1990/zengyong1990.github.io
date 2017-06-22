/**
 * Created by zy on 2016/12/8.
 * 代码需简化，暂时不动！2016/12/10---zengyong
 */
var lantern=document.getElementById("lantern");
var leftCtrl=document.getElementById("leftCtrl");
var rightCtrl=document.getElementById("rightCtrl");
var liCtrl=document.getElementById("liCtrl");
//var lanternPage=leftCtrl.getElementsByTagName("li");
var liCtrls=liCtrl.getElementsByTagName("li");
var timer=null;
var num=0;
function autoPlay(){
    timer=setInterval(function(){
        for(var m=0;m<liCtrls.length;m++){
            liCtrls[m].className='';
        }
        if(num>4){
            num=0;
        }
        lantern.style.left=-520*(num)+"px";
        liCtrls[num].className='star';
        num++;
    },1000)
}
autoPlay();
for(var i=0;i<liCtrls.length;i++){
    liCtrls[i].index=i;
    liCtrls[i].onmouseover=function(){
        clearInterval(timer);
    }
    liCtrls[i].onclick=function(){
        clearInterval(timer);
        for(var j=0;j<liCtrls.length;j++){
            liCtrls[j].className='';
        }
        this.className="star";
        lantern.style.left=-520*(this.index)+"px";
        num=this.index;
        autoPlay();
    }
    //liCtrls[i].onmouseout=function(){
    //    clearInterval(timer);
    //
    //    console.log("当前的num值"+num);
    //
    //}
}
lantern.onmouseover=function(){
    clearInterval(timer);
}
lantern.onmouseout=function(){
    autoPlay();
}
function play(){
    for(var m=0;m<liCtrls.length;m++){
        liCtrls[m].className='';
    }
    if(num>4){
        num=0;
    }
    if(num<0){
        num=4;
    }
    lantern.style.left=-520*(num)+"px";
    liCtrls[num].className='star';
}
leftCtrl.onclick=function(){
    clearInterval(timer);
    num--;
    play();
}
rightCtrl.onclick=function(){
    clearInterval(timer);
    num++;
    play();
}
leftCtrl.onmouseout=function(){
    clearInterval(timer);
    autoPlay();
}
rightCtrl.onmouseout=function(){
    clearInterval(timer);
    autoPlay();
}
//leftCtrl.onmouseover=function(){
//    clearInterval(timer);
//}
//right.onmouseover=function(){
//    clearInterval(timer);
//}

//leftCtrl.onmouseout=function(){
//    autoPlay();
//}
var nav=document.getElementById("nav");
var show=document.getElementById("showNav");
var li1=document.getElementById("li1");
var my=document.getElementById("my");
show.onmouseover=nav.onmouseover=function(){
    nav.style.display='block';
    show.style.backgroundColor='#fff';
}
show.onmouseout=nav.onmouseout=function(){
    nav.style.display='none';
    show.style.backgroundColor='transparent';
}
li1.onmouseover=my.onmouseover=function(){
    my.style.display='block';
    li1.style.backgroundColor='#fff';
}
li1.onmouseout=my.onmouseout=function(){
    my.style.display='none';
    li1.style.backgroundColor='transparent';
}


//对菜单第三个li中的星星进行控制
var li = document.getElementById("li");
var img = document.getElementById('img');
var sCamera = document.getElementById('s-camera');
var camera = document.getElementById("camera");
li.onmouseover = function () {
    img.src = 'img/星星%20(2).png';
}
li.onmouseout = function () {
    img.src = 'img/星星%20(华达驾校).png';
}
sCamera.onmouseover = function () {
    camera.src = 'img/相机1.png';
}
sCamera.onmouseout = function () {
    camera.src = 'img/相机.png';
}
var ulNav = document.getElementById('ulNav');
var navLis = ulNav.getElementsByTagName("li");
var navNone=document.getElementById('navNone0');//导航隐藏界面
var navNone1=document.getElementById('navNone1');//导航隐藏界面
navNone.onmouseover=function(){
    navNone.style.display='block';
}
navNone1.onmouseover=function(){
    navNone1.style.display='block';
}
navNone.onmouseout=function(){
    navNone.style.display='none';
}
navNone1.onmouseout=function(){
    navNone1.style.display='none';
}
/**
 * 导航图片样式修改。
 * */
for (var i = 0; i < navLis.length; i++) {
    var srcleg;
    navLis[i].index = i;
    navLis[i].onmouseover = function () {
        var img1 = this.getElementsByTagName("img")[0];
        srcleg = this.getElementsByTagName("img")[0].src;
        img1.src = 'img/' + (this.index + 1) + 2 + '.png';
            if((this.index)%2==0) {
                //navNone1.style.display='none';
                navNone.style.display = 'block';
            }else{
                //navNone.style.display = 'none';
                navNone1.style.display='block';
             }
    }
    navLis[i].onmouseout = function () {
        var img1 = this.getElementsByTagName("img")[0];
        img1.src = srcleg;
        if(this.index%2==0){
            navNone.style.display='none';
        }else{
            navNone1.style.display='none';
        }

    }
}
var timer2=null;
var banner2=document.getElementById('banner2');
var ctrl2=document.getElementById('ctrl2');
var bannerLis=ctrl2.getElementsByTagName("li");// banner2圆点按钮
var bannerSpan1=document.getElementById('bannerSpan1');//小banner的控制按钮
var bannerSpan2=document.getElementById('bannerSpan2');
var num1=0;
/**
 * 小banner动画
 */
function autoPlay2(){
    timer2=setInterval(function(){
        if(num1>2){
            num1=0;
        }
        for(var i=0;i<bannerLis.length;i++){
            bannerLis[i].className='';
        }
        bannerLis[num1].className='star';
        banner2.style.left=-520*num1+"px";
        num1++;
    },1500)
}
autoPlay2();
for(var i=0;i<bannerLis.length;i++){
    bannerLis[i].index=i;
    bannerLis[i].onclick=function(){
        clearInterval(timer2);
        for(var j=0;j<bannerLis.length;j++){
            bannerLis[j].className='';
        }
        banner2.style.left=-520*this.index+"px";
        this.className='star';
        num1=this.index;
        autoPlay2();
    }
}
function play2(){
    for(var i=0;i<bannerLis.length;i++){
        bannerLis[i].className='';
    }
    if(num1>=3){
        num1=0;
    }
    if(num1<0){
        num1=2;
    }
    bannerLis[num1].className='star';
    banner2.style.left=-520*num1+"px";
}
banner2.onmouseover=function(){
    clearInterval(timer2);
}
banner2.onmouseout=function(){
    autoPlay2();
}
bannerSpan1.onclick=function(){
    num1--;
    play2();
    clearInterval(timer2);
}
bannerSpan2.onclick=function(){
    num1++;
    play2();
    clearInterval(timer2);
}
bannerSpan1.onmouseover=bannerSpan2.onmouseover=function(){
    clearInterval(timer2);
}
bannerSpan2.onmouseout=bannerSpan1.onmouseout=function(){
    autoPlay2();
}

/*改变公告底部边框*/
var told=document.getElementById('told');
var toldLis=told.getElementsByTagName('li');
for(var i=0;i<toldLis.length;i++){
    toldLis[i].onmouseover=function(){
        for(var j=0;j<toldLis.length;j++){
            toldLis[j].getElementsByTagName('a')[0].style.borderColor="transparent";
        }
        this.getElementsByTagName('a')[0].style.borderColor='#f40';
    }
}

/*动态改变输入框颜色*/
var text=document.getElementById('text');
var str;
text.onfocus=function(){
    str=text.placeholder;
    text.style.borderColor='#f40';
    text.placeholder='';
}
text.onmouseout=function(){
    text.placeholder=str;
}

