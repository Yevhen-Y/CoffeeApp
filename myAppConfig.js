// route settings
myApp.config(function($routeProvider) {
    $routeProvider

        .when('/home', {
        templateUrl: 'home.html',
        controller: 'homeCtrl'
    })

        .when('/methods', {
        templateUrl: 'methods.html',
        controller: 'methodsCtrl'
    })

    .when('/coffeeShops', {
        templateUrl: 'coffeeShops.html',
        controller: 'coffeeShopsCtrl'
    })

    .when('/form', {
        templateUrl: 'form.html',
        controller: 'formCtrl'
    })

    .when('/ownMethods', {
        templateUrl: 'ownMethods.html',
        controller: 'ownMethodsCtrl'
    })

    .when('/coffeeShops', {
        templateUrl: 'coffeeShops.html',
        controller: 'coffeeShopsCtrl'
    })

   .otherwise({
        redirectTo: '/home'
      });


    $routeProvider.when('/methods/:itemId', {
        templateUrl: 'methodDetail.html',
        controller: 'methodDetailCtrl',
        resolve: {
            delay: function($q, $timeout) {
                var delay = $q.defer();

                $timeout(delay.resolve, 1000);

                return delay.promise;
            }
          }
        })

    $routeProvider.when('/ownMethods/:itemId', {
        templateUrl: 'ownMethodDetail.html',
        controller: 'ownMethodDetailCtrl',
        resolve: {
            delay: function($q, $timeout) {
                var delay = $q.defer();

                $timeout(delay.resolve, 1000);

                return delay.promise;
            }
          }
        })

});