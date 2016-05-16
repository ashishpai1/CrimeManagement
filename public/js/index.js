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
  }).when("/analysis1",{
      templateUrl: "partials/olap/analysis1.html",
  }).when("/analysis2",{
      templateUrl: "partials/olap/analysis2.html",
  }).when("/analysis3",{
      templateUrl: "partials/olap/analysis3.html",
  }).when("/analysis4",{
      templateUrl: "partials/olap/analysis4.html",
  }).when("/analysis5",{
      templateUrl: "partials/olap/analysis5.html",
  }).when("/quarterly",{
      templateUrl: "partials/olap/crime1.html",
  }).when("/crime2016",{
      templateUrl: "partials/olap/crime2.html",
  }).when("/crime2015",{
      templateUrl: "partials/olap/crime3.html",
  }).when("/crime2014",{
      templateUrl: "partials/olap/crime4.html",
  }).when("/crime5",{
      templateUrl: "partials/olap/crime5.html",
  }).when("/success",{
      templateUrl: "partials/success.html",
  })
})


.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
	console.log("HomeCtrl");
}])

.controller('AnalyticsCtrl', ['$scope', '$http', function($scope, $http){

    $scope.hideAll = function(){
        $(".tableauPlaceholder").hide()
    }

    $scope.showAnalysis1 = function(){
        hideAll();
        document.getElementById("analysis1").display = block;
    }


    $scope.showAnalysis2 = function(){
        hideAll();
        document.getElementById("analysis2").display = block;
    }


    $scope.showAnalysis3 = function(){
        hideAll();
        document.getElementById("analysis3").display = block;

    }

    $scope.showAnalysis4 = function(){
        hideAll();
        document.getElementById("analysis4").display = block;

    }

    $scope.showAnalysis5 = function(){
        hideAll();
        document.getElementById("analysis5").display = block;

    }

    $scope.showAnalysis6 = function(){
        hideAll();
        document.getElementById("analysis6").display = block;
    }

    $scope.showAnalysis6 = function(){
        hideAll();
        document.getElementById("analysis6").display = block;
    }

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

