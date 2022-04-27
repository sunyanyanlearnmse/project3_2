var banner=document.getElementById('banner');
var prev=document.getElementById('prev');
var next=document.getElementById('next');
var lis=document.querySelectorAll('+content>li');
var dots=document.querySelectorAll('navv>li');
var index=0;
next.onclick=nextFun;
function nextFun (){
  lis[index].style.opacity=0;
  index++;
  if(index==3){
    index=0;   
  }
  lis[index].style.opacity=1;
  changedot();
}
prev.onclick=function(){
  lis[index].style.opacity=0;
  index--;
  if(index==-1){
    index=2;    
  }
  lis[index].style.opacity=1;
  changedot();
}


function changedot(){
     for (var i=0;i<dots.length;i++){
          dots[i].style.backgroundcolor ='#fff';
     }
     dots[index].style.backgroundcolor='#f00'
    }

var timer = setInterval(nextFun,2000);

banner.onmouseover=function(){
  prev.style.opacity=1;
  next.style.opacity=1;
  clearInterval(timer);
}
banner.onmouseout=function(){
  prev.style.opacity=0;
  next.style.opacity=0;
  timer = setInterval(nextFun,2000);
  
}
for (var i=0;i<dots.length;i++){
     dots[i].pos=i;
}
for (var i=0; i<dots.length;i++){
    dots[i].onmouseover =function(){
      lis[index].style.opacity=0;
      index=this.pos;
      lis[index].style.opacity=1;
      changedot();
       
    }
}