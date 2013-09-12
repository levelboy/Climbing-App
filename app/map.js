function onGoogleReady() {
	console.log("GMaps api initialized.");	
	angular.bootstrap(document.getElementById("map"), ['Maptesting']);
}

angular.module('Maptesting', ['ui.map', 'ui.event'])
	.controller('CtrlGMap', ['$scope', function($scope) {
		
		$scope.mapOptions = {
			center: new google.maps.LatLng(-54.798112, -68.303375),
			zoom: 11,
			mapTypeId: google.maps.MapTypeId.SATELLITE
		};

		$scope.myMarkers = [];


		$scope.addMarker = function ($event) {
	    	$scope.myMarkers.push(new google.maps.Markers({
	    		map: $scope.myMap,
	    		position: $event.latLng
	    	}));
	    };

	    $scope.markerClicked = function(m) {
	        window.alert("clicked");
    	};


	}]);