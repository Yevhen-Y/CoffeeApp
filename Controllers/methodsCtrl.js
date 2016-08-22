// Controller for METHODS PAGE
myApp.controller('methodsCtrl', [ '$scope','$http', '$localStorage', function($scope, $http, $localStorage) {
//Getting data from json file
  $http.get('coffeeMethods.json').then(function(response) {
  $scope.methods = response.data.methods;
})

  $scope.amountOfRecipes = localStorage.length;

}]);