// Controller for METHODS PAGE
myApp.controller('methodsCtrl', [ '$scope','$http', function($scope, $http) {
//Getting data from json file
  $http.get('JSON_files/coffeeMethods.json').then(function(response) {
  $scope.methods = response.data.methods;
})

}]);