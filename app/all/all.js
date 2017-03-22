var app = angular.module('myApp.all', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/all', {
    templateUrl: 'all/all.html',
    controller: 'allCtrl'
  });
}])

app.controller('allCtrl', ['$scope', '$http', function($scope, $http) {
	var url = 'http://iwg-prod-web-interview.azurewebsites.net/stem/v1/funds'; 
    $http.get(url).then(function(response) {
        console.log(response);
        $scope.all = response.data;
    });
}]);