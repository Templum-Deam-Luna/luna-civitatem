angular.module('pageCharterCh2')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/charter/ch2/', {
		templateUrl: 'pages/charter/ch2/ch2.html',
		controllerAs: '$ctrl',
		controller() {
		},
	});
}]);
