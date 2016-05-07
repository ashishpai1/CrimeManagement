angular.module('myApp', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider.when("/",{
      templateUrl: "partials/home.html",
      controller: "HomeCtrl"
    }).when("/analytics",{
	  templateUrl: "partials/dashboard.html",
      controller: "AnalyticsCtrl"
  }).when("/criminal",{
      templateUrl: "partials/criminal.html",
      controller: "CriminalCtrl"
  }).when("/crime",{
      templateUrl: "partials/crime.html",
      controller: "CrimeCtrl"
  }).when("/prison",{
      templateUrl: "partials/prison.html",
      controller: "PrisonCtrl"
  }).when("/officer",{
      templateUrl: "partials/officer.html",
      controller: "OfficerCtrl"
  })
})
.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
	console.log("HomeCtrl");
}])

.controller('AnalyticsCtrl', ['$scope', '$http', function($scope, $http){
 /*   $http.get('http://127.0.0.1:3008/getAnalytics', function(data){
        console.log(data);
    }); */
/*
    $http({
          method: 'GET',
          url: 'http://127.0.0.1:3008/getAnalytics'
        }).then(function successCallback(response) {
            console.log("I am back");
            console.log(response);
            $scope.statData = response.data;

            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            console.log(error);
            // called asynchronously if an error occurs
            // or server returns response with an error status.
    });
*/
	console.log("AnalyticsCtrl");

}]).controller('CriminalCtrl', ['$scope', '$http', function($scope, $http){
    console.log("CriminalCtrl");
}]).controller('CrimeCtrl', ['$scope', '$http', function($scope, $http){
    console.log("CrimeCtrl");
}]).controller('PrisonCtrl', ['$scope', '$http', function($scope, $http){
    console.log("PrisonCtrl");
}]).controller('OfficerCtrl', ['$scope', '$http', function($scope, $http){
    console.log("OfficerCtrl");
}]);

