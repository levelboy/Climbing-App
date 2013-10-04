climbingApp.factory('Markers', function( $rootScope, $location ) {

	return {
			
		addClickListener: function( markers, callback ){
			google.maps.event.addListener( map, 'click', function(e){
					
					if( $location.path() == '/newSector' ){
						
						lastMarker = markers[markers.length - 1];

						if( lastMarker.title ) {

							markers.push( new google.maps.Marker({
									position: e.latLng,
									map: map
								})
							);

						} else {
							
							lastMarker.setMap(null);
							
							var index = markers.indexOf(lastMarker);
							markers.splice(index, 1);
							
							markers.push( new google.maps.Marker({
									position: e.latLng,
									map: map
								})
							);
						}


						$rootScope.$apply(function(){ callback(e); });

					}

			});

		}

	}

});