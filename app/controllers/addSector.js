(function(){

	'use strict';

	climbingApp.controllers.
		
		controller(
		'addSector', [ '$scope', function( $scope ) {
			
			//New marker reference
			$scope.newMarker;

			$scope.addNewMarker = function(pos) {
				$scope.newMarker = new google.maps.Marker({
					map: map,
					position: pos
				});
			}


		}]);

})();