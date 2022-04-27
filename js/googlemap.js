function init()
 {
  var mycenter = new google.maps.LatLng(34.183506,112.142356);
  
  var mapProp ={
    center: mycenter,
    zoom:7,
    zoomControl:true,
    mapTypeControl:true,
    scaleControl:true,
    streetViewControl:true,
    overviewMapControl:true,
    rotateControl:true,   
    mapTypeId: google.maps.MapTypeId.ROADMAP    
  };
  var map=new google.maps.Map(document.getElementById("googlemap"), mapProp);
  var mycity=new google.maps.Circle
  ({
    center:mycenter,  
    radius:25600,
    strokeColor:"#FF0011"  ,
    strokeOpacity:0.9,
    strokeWeight:2,
    fillColor:"#000055",
    fillOpacity:0.4    
  });
  mycity.setMap(map);
  };
  
google.maps.event.addDomListener(window,'load',init);

