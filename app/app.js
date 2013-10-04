'use strict';

var climbingApp = angular.module('climbingApp', []);


function Main ($scope) {
    
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

function addSector( $scope ) {

}