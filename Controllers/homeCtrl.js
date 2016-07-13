// Controller for HOME PAGE
myApp.controller('homeCtrl', function($scope, $http) {

  $http.get('coffeeMethods.json').then(function(response) {
  $scope.methods = response.data.methods;

  console.log($scope.methods)
});
})