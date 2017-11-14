'use strict';

angular.module('pageCharterCh1')
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/charter/ch1/', {
		templateUrl: 'pages/charter/ch1/ch1.html',
		controllerAs: '$ctrl',
		controller() {
		},
	})
}])
