/*
	  Author: Jake Dalton
      File: skate.js
      Associated files: skate.html, email_list.js, prestige.css, project.js
      Last edit: 9/22/15 JD -->
 	  Google map api for skatepark location map on skate.html */

var LocationData = [
    [43.618341, -116.213897, "Rhodes Skatepark <br /> 1555 W FRONT ST, Boise ID 83702" ], 
    [43.616050, -116.188444, "Fort Boise Skatepark <br /> 155 E Garrison Rd, Boise, ID 83702" ], 
    [43.713163, -116.315849, "Eagle Skatepark <br /> 11800 Horseshoe Bend Rd, Eagle, ID 83714" ], 
    [43.628413, -116.413201, "Tully Park <br />  2500 N Linder Rd, Meridian, ID 83646" ], 
    [43.617033, -116.207116, "Prestige Skateboards <br /> 106 S. 11th Street, Boise ID 83702<br /> (208) 424-6824" ],
	[43.590335, -116.546858, "Stampede Skatepark <br /> 11th Ave N Ext & Stampede Dr & 11th Ave N Ext, <br />Nampa, ID 83687" ], 
	[43.655868, -116.629908, "Pipe Dream Skatepark <br /> 4700 Skyway Drive Caldwell, ID 83605" ]
];  
 
function initialize()
{
	var myLatlng = new google.maps.LatLng(43.617033, -116.207116);
var mapOptions = {
  zoom: 18,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.SATELLITE
};
    var map = 
        new google.maps.Map(document.getElementById('location-canvas'));
		
    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow();
     
    for (var i in LocationData)
    {
        var p = LocationData[i];
        var latlng = new google.maps.LatLng(p[0], p[1]);
        bounds.extend(latlng);
         
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: p[2]
        });
     
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(this.title);
            infowindow.open(map, this);
        });
    }
     
    map.fitBounds(bounds);
}
 
google.maps.event.addDomListener(window, 'load', initialize);