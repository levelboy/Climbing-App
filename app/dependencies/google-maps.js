'use strict';

climbingApp.directive('gmap', ['$location', function( $location ) {
        

		function gInit (scope) {
			var lat = scope.initLocation.lat;
			var lng = scope.initLocation.lng;
			var sectors = scope.sectors;
			var markers = scope.markers;

			var Location = new google.maps.LatLng(lat, lng),
			mapOptions = {
				center: Location,
				zoom: 11,
				disableDefaultUI: true,
				mapTypeId: google.maps.MapTypeId.SATELLITE,
			}
			
			//instance map
			var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			
			//Set sector's markers
			for ( var i = 0; i < sectors.length; i++ ) {
				var posMarker = new google.maps.LatLng( sectors[i].location.lat, sectors[i].location.lng );
				var title = sectors[i].title;

				addMarker( posMarker, title );
			}



			//This is a closure: has access to gInit scope and the global scope
			function addMarker ( location, title ) {
				markers.push( new google.maps.Marker({
						position: location,
						title: title,
						map: map
					})
				);
			}

			return map;
		}

		return {
            restrict: 'E',
            replace: true,
            template: '<div id="map-canvas"></div>',
            link: function(scope, iElement, attrs) {
                window.map = gInit(scope);
            }
        }
	}
]);
		