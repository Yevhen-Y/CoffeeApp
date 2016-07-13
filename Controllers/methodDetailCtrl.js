// Controller for MethodDetail PAGE 
//TODO: separate data from json file and from localStorage and display it by id
myApp.controller('methodDetailCtrl', ['$scope', '$routeParams', '$http', '$localStorage', function($scope, $routeParams, $http, $localStorage) {
  //define route params
    console.log($routeParams); 
    $scope.item = $routeParams.itemId;
    $http.get('coffeeMethods.json').then(function(response) {
  $scope.methods = response.data.methods;

  console.log($scope.methods);
})

    }
]);