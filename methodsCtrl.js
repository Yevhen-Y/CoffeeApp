// Controller for METHODS PAGE
myApp.controller('methodsCtrl', [ '$scope','$http', '$localStorage', function($scope, $http, $localStorage) {
//Getting data from json file
  $http.get('coffeeMethods.json').then(function(response) {
  $scope.methods = response.data.methods;
})
//Getting data from localStorage
 $scope.newMethodList = [];

for (var i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        $scope.newMethodList.push(JSON.parse(localStorage.getItem(key)));
        $scope.myMethods = $scope.newMethodList;
    }
}]);