// Controller for FORM PAGE
myApp.controller('formCtrl', ['$scope','$localStorage', function ($scope,$localStorage){
// save data into localStorage
$scope.saveData = function(method){
        var newMethod = {
        'title': method.name,
        'instruction': method.instruction,
        'pictureURL': method.url 
}
        $localStorage[localStorage.length+1] = newMethod;
    };
}]);