myApp.controller('ownMethodsCtrl', [ '$scope', '$localStorage', function($scope, $localStorage) {

//Getting data from localStorage
 $scope.newMethodList = [];
 

for (var i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        $scope.newMethodList.push(JSON.parse(localStorage.getItem(key)));
        $scope.myMethods = $scope.newMethodList;
    }
}]);