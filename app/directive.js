angular.module("vikingApp").directive("itineraries", function($http) {
    return {
        // ITINERARIES SLIDER TEMPLATE
        templateUrl: "pages/itineraries.html",
        restrict: "E",
        link: function(scope, element, attrs) {
            // LOAD JSON
            $http.get("app/itineraries.json").then(function(myData) {
                $.ajax({ cache: false }); // IE & EDGE FIX
                scope.trips = myData.data;
            });
            scope.trips = [];
            scope.value = 0;
            scope.nextTrip = function() {
                scope.value++;
                if (scope.value > scope.trips.length - 1) {
                    scope.value = 0;
                }
            };
            scope.prevTrip = function() {
                scope.value--;
                if (scope.value < 0) {
                    scope.value = scope.trips.length - 1;
                }
            };
        }
    };
});
// ITINERARIES GRID TEMPLATE
angular.module("vikingApp").directive("gridView", function($http) {
    return {
        templateUrl: "pages/itinerariesGrid.html",
        restrict: "E",
        link: function(scope, element, attrs) {
            // FILTER TABLE
            scope.trips = [];
            scope.sortType = "days";
            scope.sortReverse = false;
            scope.searchTable = "";
        }
    };
});
// IMAGE GALLERY TEMPLATE
angular.module("vikingApp").directive("gallery", function() {
    return {
        templateUrl: "pages/imageGallery.html",
        restrict: "E",
        link: function(scope, element, attrs) {
            scope.changeImg = function (event) {
                event.event || window.event;
                var targetEvent = event.target || window.event;
                if ((targetEvent.tagName = "IMG")) {
                    mainImg.src = targetEvent.getAttribute("src");
                }
            }
        }
    };
});
// IMAGE GALLERY TEMPLATE
angular.module("vikingApp").directive("discoverShip", function(divService) {
    return {
        templateUrl: "pages/discoverShip.html",
        restrict: "E",
        link: function(scope, element, attrs) {
        // NO FUNCS NEEDED HERE YET
        }
    };
});
// VIDEO PLAYER
vikingApp.directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
});
