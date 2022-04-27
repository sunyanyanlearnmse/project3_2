function imgscroll(){
  var catimg=document.getElementById("img_1");
   if(catimg.src.match("media/cat_1.jpg")){
     catimg.src="media/cat_2.jpg"
  }
  else if(catimg.src.match("media/cat_2.jpg")){
    catimg.src="media/cat_3.jpg"
  }
  else{
    catimg.src="media/cat_1.jpg"
  }
}
window.onload=function(){
  timer=setInterval(imgscroll,2000)
}