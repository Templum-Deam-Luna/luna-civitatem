'use strict';

angular.module('luna-civitatem', [
	'ngRoute',
	'pageCharterCh1',
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
	})
	.otherwise({redirectTo: '/'})
}])
