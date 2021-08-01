var vikingApp = angular.module("vikingApp", ["ngRoute", 'chieffancypants.loadingBar', 'ngAnimate']);

vikingApp.config(function($routeProvider, $httpProvider, cfpLoadingBarProvider) {
    // LOADER
    cfpLoadingBarProvider.includeSpinner = true;
    // IE FIX FOR JSON DATA NOT LOADING
    $httpProvider.defaults.cache = false;
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    // DISABLE IE AJAX REQUEST CACHING
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    
    $routeProvider
        .when("/home", {
            templateUrl: "pages/home.html",
            controller: "homeController"
        })
        .when("/deckA", {
            templateUrl: "pages/decka.html",
            controller: "deckA"
        })
        .when("/deck1", {
            templateUrl: "pages/deck1.html",
            controller: "deck1"
        })
        .when("/deck2", {
            templateUrl: "pages/deck2.html",
            controller: "deck2"
        })
        .when("/deck3", {
            templateUrl: "pages/deck3.html",
            controller: "deck3"
        })
        .when("/deck4", {
            templateUrl: "pages/deck4.html",
            controller: "deck4"
        })
        .when("/deck5", {
            templateUrl: "pages/deck5.html",
            controller: "deck5"
        })
        .when("/deck6", {
            templateUrl: "pages/deck6.html",
            controller: "deck6"
        })
        .when("/deck7", {
            templateUrl: "pages/deck7.html",
            controller: "deck7"
        })
        .when("/deck8", {
            templateUrl: "pages/deck8.html",
            controller: "deck8"
        })
        .when("/deck9", {
            templateUrl: "pages/deck9.html",
            controller: "deck9"
        })
        .otherwise({ redirectTo: "/home" });
});

// PARTIAL NAVIGATION
vikingApp.run(function($rootScope, PrevNextService, $route, $location ) {
    $rootScope.goNext = function(direction) {
        PrevNextService.goNext();
        // SLIDE LEFT
        $rootScope.direction = true;
    };
    $rootScope.goBack = function(direction) {
        PrevNextService.goBack();
        // SLIDE RIGHT
        $rootScope.direction = false;
    };
});

vikingApp.factory("PrevNextService", function($route, $location) {
    var routes = [];
    angular.forEach($route.routes, function(config, route) {
        if (angular.isUndefined(config.redirectTo)) {
            routes.push(route);
        }
    });

    return {
        goNext: function() {
            var nextIndex = routes.indexOf($location.path()) + 1;
            if (nextIndex === routes.length) {
                $location.path(routes[0]);
            } else {
                $location.path(routes[nextIndex]);
            }
        },
        goBack: function() {
            var backIndex = routes.indexOf($location.path()) - 1;
            if (backIndex === -1) {
                $location.path(routes[routes.length - 1]);
            } else {
                $location.path(routes[backIndex]);
            }
        }
    };
});
