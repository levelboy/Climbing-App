function CtrlGMap($scope) {
	var marker;

	var mapOptions = {
		center: new google.maps.LatLng(-54.798112, -68.303375),
		zoom: 11,
		//disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};

	map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

	var contentString = "Cara de pito";

	var infoWindow = new google.maps.InfoWindow({
		content: contentString
	});

	google.maps.event.addListener(map, "click", function(e) {
		lat = e.latLng.lat();
		lng = e.latLng.lng();

		$scope.lat = lat;
		$scope.lng = lng;
		$scope.$apply();

		if (marker != null) {
			marker.setMap( null );
			addMarker( e.latLng );
		} else {
			addMarker( e.latLng );
		}
	});

	function addMarker( location ) {
		marker = new google.maps.Marker({
			position: location,
			title: 'sector position',
			map: map
		});

		google.maps.event.addListener(marker, 'click', function() {
  			infoWindow.open(map,marker);
		});
	}
}