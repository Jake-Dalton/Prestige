
/*
	  Author: Jake Dalton
      File: about.js
      Associated files: about.html, prestige.css, project.js
      Last edit: 9/22/15 JD -->
 	  Google map api for map location on about.html */
	  
	  
function initialize() {
    var mapOptions = {
        zoom: 19,
        center: new google.maps.LatLng(43.617034, -116.207118),
        mapTypeId: google.maps.MapTypeId.HYBRID,
     };
 
     var map = new google.maps.Map(document.getElementById('location-canvas'),
mapOptions);

 
    var marker = new google.maps.Marker({
        map: map,
        draggable: false,
        position: new google.maps.LatLng(43.617034, -116.207118),
		animation:google.maps.Animation.BOUNCE,
		title: 'Prestige Skateboards'
    });
	
	
}
 
google.maps.event.addDomListener(window, 'resize', initialize);
google.maps.event.addDomListener(window, 'load', initialize)