myApp.controller('ownMethodDetailCtrl', ['$scope', '$routeParams', '$localStorage', function($scope, $routeParams, $localStorage) {
  //define route params
    console.log($routeParams); 
    $scope.item = $routeParams.itemId;


$scope.newMethodList = [];
 

for (var i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        $scope.newMethodList.push(JSON.parse(localStorage.getItem(key)));
        $scope.myMethods = $scope.newMethodList;
    }



}]);
