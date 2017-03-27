var detailed = angular.module('myApp.detailed', ['ngRoute']);

detailed.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detailed', {
    templateUrl: 'detailed/detailed.html',
    controller: 'View2Ctrl'
  });
}])

detailed.controller('View2Ctrl', ['$scope', '$location', '$http' , function($scope, $location, $http) {
	var id = $location.search().id; // get url param number to fetch correct data
	console.log(id);
	$scope.edit = false; // close edit section
	$scope.item = {};
	$http.get('http://iwg-prod-web-interview.azurewebsites.net/stem/v1/funds/' + id).then(function(response) {
		$scope.detail = [response.data];
		console.log($scope.detail);
	});

	$scope.update = function () { // try to update the name of the fund EDIT TO DO does not allow me to edit or update name per API
		console.log($scope.item.newName);
		var data = {
		  "InvestmentName": $scope.item.newName
		}
		$http.put('http://iwg-prod-web-interview.azurewebsites.net/stem/v1/funds/' + id, data).then(function(response) {
			console.log(repsonse.data);
		})
	}
}]);