(function(){

	'use strict';

	climbingApp.controllers.
		
		controller(
		'AppCtrl', [ '$scope', function( $scope ) {
				
				$scope.sectors = [
				   {
				   	'title': 'gato',
				   	'location': {
				   		'lat' : -54.798200,
				   		'lng' : -68.303375,
				   	}
				   },
				   {
				   	'title': 'prueba2',
				   	'location': {
				   		'lat' : -54.798200,
				   		'lng' : -68.50000,
				   	}
				   }
			    ];

		}]);

})();