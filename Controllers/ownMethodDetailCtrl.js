myApp.controller('ownMethodDetailCtrl', ['$scope', '$routeParams', '$localStorage', function($scope, $routeParams, $localStorage) {
  //define route params
    console.log($routeParams); 
    $scope.item = $routeParams.itemId;


$scope.newMethodList = [];
 
        $scope.newMethodList.push(JSON.parse(localStorage.getItem('ngStorage-'+ $scope.item)));
        $scope.myMethods = $scope.newMethodList;



console.log($scope.newMethodList);

    $scope.deleteRecipe = function() {
        localStorage.removeItem('ngStorage-'+$scope.item)
    }



}]);
