function onGoogleReady() {
	console.log("GMaps api initialized.");	
	angular.bootstrap(document.getElementById("map"), ['Maptesting']);
}

angular.module('Maptesting', ['ui.map', 'ui.event'])
	.controller('CtrlGMap', ['$scope', function($scope) {
		
		$scope.myMarker = null;

		$scope.mapOptions = {
			center: new google.maps.LatLng(-54.798112, -68.303375),
			zoom: 11,
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			disableDefaultUI: true
		};

		$scope.addMarker = function ($event, $params) {
			if ($scope.myMarker == null) {
				$scope.myMarker = new google.maps.Marker({
					map: $scope.myMap,
			        position: $params[0].latLng,
			        title: $scope.name
			        });
			} else {
				$scope.myMarker.setMap( null );
			    $scope.myMarker = new google.maps.Marker({
					map: $scope.myMap,
			        position: $params[0].latLng,
			        title: $scope.name
			        });
			}

			//Set the inputs to the map lat and lng
	    	$scope.lat = $params[0].latLng.lat();
	    	$scope.lng = $params[0].latLng.lng();
	    };

	    $scope.openMarkerInfo = function(marker) {
		  $scope.currentMarker = marker;
		  $scope.currentMarkerLat = marker.getPosition().lat();
		  $scope.currentMarkerLng = marker.getPosition().lng();
		  $scope.myInfoWindow.open($scope.myMap, marker);
		};


	}]);