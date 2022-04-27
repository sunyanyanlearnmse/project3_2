var banner=document.getElementById('banner');
var prev=document.getElementById('prev');
var next=document.getElementById('next');
var lis=document.querySelectorAll('#content>li');
var dots=document.querySelectorAll('#navv>li');
var index=0;
//点击next
next.onclick=nextFun;
function nextFun(){
    lis[index].style.opacity =0;
    index++;
    if(index==3){
      index=0;   
    }
    lis[index].style.opacity =1;
    changeDot();
}
    
  //点击 prev
prev.onclick=function(){
  lis[index].style.opacity=0;
  index--;
  if(index==-1){
    index=2;    
  }
  lis[index].style.opacity=1;
  changeDot();
}
//按钮颜色变化
function changeDot(){
     for (var i=0;i<dots.length;i++){
          dots[i].style.backgroundcolor ='#fff';
     }
     dots[index].style.backgroundcolor='#f00';
    }
//定时器 过2秒自动切换图片
var timer = setInterval(nextFun,2000);
window.onload=function(){
  timer=setInterval(nextFun,2000);
}
//鼠标移入
banner.onmouseover=function(){
  prev.style.opacity=1;
  next.style.opacity=1;
  clearInterval(timer);
}
//鼠标移出
banner.onmouseout=function(){
  prev.style.opacity=0;
  next.style.opacity=0;
  timer = setInterval(nextFun,2000);
  
}
//为li添加鼠标移入事件
for (var i=0;i<dots.length;i++){
     dots[i].pos=i;
}
for (var i=0; i<dots.length;i++){
    dots[i].onmouseover =function(){
      lis[index].style.opacity=0;
      index=this.pos;
      lis[index].style.opacity=1;
      changeDot();
       
    }
}

window.onload=function(){
  timer=setInterval(imgscroll,2000)
}