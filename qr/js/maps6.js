	function initialize() {
	var myLatlng = new google.maps.LatLng(-6.7246829,108.5653505),
	mapOptions = {
		zoom: 18,
		center: myLatlng,
		disableDefaultUI: true, //WOOHOOOO Disable control !!
		mapTypeId: google.maps.MapTypeId.HYBRID 
		}
var map = new google.maps.Map(document.getElementById('map'), mapOptions);
var contentString = 'target';
var infowindow = new google.maps.InfoWindow({
	content: contentString,
	maxWidth: 500
});

var marker = new google.maps.Marker({
	position: myLatlng,
	map: map
});

google.maps.event.addListener(marker, 'click', function() {
	infowindow.open(map,marker);
});

google.maps.event.addDomListener(window, "resize", function() {
	var center = map.getCenter();
	google.maps.event.trigger(map, "resize");
	map.setCenter(center);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);