/* app.json */

angular.module('luna-civitatem', modules)
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
	})
	.otherwise({redirectTo: '/'})
}])
