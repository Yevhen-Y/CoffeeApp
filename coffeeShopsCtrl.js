myApp.controller('coffeeShopsCtrl', [ '$scope','$http', function($scope, $http) {
//Getting data from json file
  $http.get('coffeeShops.json').then(function(response) {
  $scope.coffeeShops = response.data.methods;
})

}]);