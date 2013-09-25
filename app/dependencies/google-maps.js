'use strict';

climbingApp.directive('gmap', function() {
        return {
            restrict: 'E',
            replace: true,
            template: '<div id="map-canvas"></div>',
            link: function(scope, iElement, attrs) {
                gInit(scope);
            }
        }
		function gInit (scope) {
			var lat = scope.initLocation.lat;
			var lng = scope.initLocation.lng;
			var markers = scope.markers;

			var Location = new google.maps.LatLng(lat, lng),
			mapOptions = {
				center: Location,
				zoom: 11,
				disableDefaultUI: true,
				mapTypeId: google.maps.MapTypeId.SATELLITE,
			}
			
			//instance map
			window.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			
			//Set markers
			for ( var i = 0; i < markers.length; i++ ) {
				var posMarker = new google.maps.LatLng( markers[i].location.lat, markers[i].location.lng );
				var title = markers[i].title;
				console.log( "marcador: " + posMarker);

				addMarker( posMarker, title, map );
			}
		}

		function addMarker ( location, title, map) {
			var marker = new google.maps.Marker({
				position: location,
				title: title,
				map: map
			});
		}
	});
		