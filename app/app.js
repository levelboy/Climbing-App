var climbingApp = angular.module('climbingApp', ['ngRoute'], function( $routeProvider ){
	$routeProvider.when('/', {
		controller: 'ctrl'
	});

	$routeProvider.when ('/newSector', {
		templateUrl: 'app/templates/newSector.html',
		controller: 'addSector'
	});
});


//Agregar marcadores
climbingApp.factory('markerSector', function($scope){
	google.maps.event.addListener(map, 'click', function(e) {
		var marker = new google.maps.Marker({
				position: e.latLng,
				map: map
			});
	});
});


function ctrl ($scope) {
    $scope.initLocation = {
        lat: -54.798112,
        lng: -68.303375
    };
    $scope.markers = [
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
}


function addSector($scope) {
}

//Injecta la posibilidad de agregar markadores
addSector.$inject = ['$scope', 'markerSector'];