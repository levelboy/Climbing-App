(function() {
	'use strict';

	window.climbingApp = window.climbingApp || {};

	climbingApp = angular.module('climbingApp', [
		'ngRoute',
		'controllers'
	]);

	climbingApp.controllers = angular.module('controllers', []);

	climbingApp.config(
		function( $routeProvider ){
			$routeProvider.

			when('/', {

			}).

			when('/newSector', {
				templateUrl: 'app/templates/newSector.html',
				controller: 'addSector',
			}).

			otherwise({ redirectTo: '/'});
		}
	);

})();