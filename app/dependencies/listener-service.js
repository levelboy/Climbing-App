climbingApp.factory('Markers', function( $rootScope, $location ) {

	return {
			
		addClickListener: function( marker, callback ){
			google.maps.event.addListener( map, 'click', function(e){
					
					if( $location.path() == '/newSector' ){
						
						if ( marker ) {
							
							marker.setMap(null);
							
							marker = new google.maps.Marker({
								position: e.latLng,
								map: map
							});

						} else {
							marker = new google.maps.Marker({
								position: e.latLng,
								map: map
							});
						}

						$rootScope.$apply(function(){ callback(e); });

					}

			});
		}

	}

});