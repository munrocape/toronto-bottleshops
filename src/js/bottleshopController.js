var bottleshopApp = angular.module('bottleshopApp', []);

bottleshopApp.controller('BottleshopController', ['$scope', '$http', '$compile', function ($scope, $http, $compile) {
	$scope.listings = [];
	$scope.flattenedBeers = [];
	$scope.cookingUp = true;
    $scope.init = function () {
    	// Simple GET request example:
    	$http.get('/api/listings').then(
    		function success(rep) {
    			$scope.listings = rep.data['beers'];
    			console.log($scope.listings);
    			$scope.cookingUp = false;
    		}, 
    		function error(rep) {
    			$scope.displayError("Beer listings are unavailable :(");
    		}
    	);
    }

    $scope.displayError = function(msg) {
    	$scope.error = msg;
    }

    $scope.init();
}]);