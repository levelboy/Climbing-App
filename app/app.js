'use strict';

var climbingApp = angular.module('climbingApp', ['ngRoute'], function( $routeProvider ){

	
	$routeProvider.when('/', {
		controller: 'ctrl'
	});

	
	$routeProvider.when ('/newSector', {
		templateUrl: 'app/templates/newSector.html',
		controller: 'addSector'
	});

});


function Main ($scope) {
    
    $scope.initLocation = {
        lat: -54.798112,
        lng: -68.303375
    };

    $scope.markers = [];

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
}

function addSector( $scope, Markers ) {
	//New added marker
	$scope.marker;

	Markers.addClickListener($scope.marker, function(e){
    	$scope.lat = e.latLng.lat();
    	$scope.lng = e.latLng.lng();
    });
}