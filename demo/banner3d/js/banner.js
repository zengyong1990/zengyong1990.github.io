
var cont=document.getElementById("contain");
var style=document.getElementById("style");
var nav=document.getElementById("nav");
var spanNode=nav.getElementsByTagName("span");

var num=1050/30;
var zIndex=0;

for(var i=0;i<num;i++){
    i>num/2?zIndex--:zIndex++;
    cont.innerHTML+="<ul><li></li><li></li><li></li><li></li></ul>";
    style.innerHTML+='#contain ul:nth-of-type('+(i+1)+') '+'li'+'{background-position:'+(-30*i)+'px 0px}';
    style.innerHTML+='#contain ul:nth-child('+(i+1)+')'+'{z-index:'+zIndex+'}';

}
var oUl=cont.getElementsByTagName("ul");
var sindex=0;

    contain.onmouseover=function(){
        clearInterval(timeD);
    }
    contain.onmouseout=function(){
        play();
    }

for(var j=0;j<spanNode.length;j++){
    spanNode[j].sindex=j;
    spanNode[j].onclick=function(){
        autoPlay(this);
    }
    spanNode[j].onmouseover=function(){
        clearInterval(timeD);
    }
    spanNode[j].onmouseout=function(){
        play();
    }
}
var colums=0;
var timeD;
function play(){
    clearInterval(timeD);
    timeD=setInterval(function(){
        colums++;
        if(colums>=4){
            colums=0;
        }
        autoPlay(spanNode[colums]);
    },3000);
}
play();
function autoPlay(that){
    for(var j=0;j<spanNode.length;j++){
        spanNode[j].className='';
    }
    var sindex1=that.sindex;
    that.className="active";
    for(var m=0;m<oUl.length;m++){
        // alert(90*sindex1);
        oUl[m].style.transform="rotateX("+(sindex1*90)+"deg)";
        oUl[m].style.transition="all 0.8s "+60*m+"ms";
    }
}


