const myApp = angular.module("myApp", ["ngRoute"]);

myApp.controller("myCtrl", ($scope) => {
  $scope.viewer = Math.floor(Math.random() * 100);
  $scope.arrayMenu = ["", "", "", "", "active"];
  $scope.menuActive = function (param) {
    for (let i = 0; i < $scope.arrayMenu.length; i++) {
      $scope.arrayMenu[i] = "";
    }
    if (param == "traditional") {
      $scope.arrayMenu[0] = "active";
    } else if (param == "temporary") $scope.arrayMenu[1] = "active";
    else if (param == "design") $scope.arrayMenu[2] = "active";
    else if (param == "modern") $scope.arrayMenu[3] = "active";
    else if (param == "home") $scope.arrayMenu[4] = "active";
    console.log($scope.arrayMenu);
  };
});

myApp.controller("traditionCrt", ($scope) => {
  $scope.filter = ["active", "", ""];
  $scope.filterBox = [true, false, false];

  $scope.filterActive = (param) => {
    for (let i = 0; i < $scope.filter.length; i++) {
      $scope.filter[i] = "";
      $scope.filterBox[i] = false;
    }
    if (param == 0) {
      $scope.filter[0] = "active";
      $scope.filterBox[0] = true;
    } else if (param == 1) {
      $scope.filter[1] = "active";
      $scope.filterBox[1] = true;
    } else if (param == 2) {
      $scope.filter[2] = "active";
      $scope.filterBox[2] = true;
    }
  };
});
myApp.controller("contemporaryCrt", ($scope) => {
  $scope.filter = ["active", "", ""];
  $scope.filterBox = [true, false, false];

  $scope.filterActive = (param) => {
    for (let i = 0; i < $scope.filter.length; i++) {
      $scope.filter[i] = "";
      $scope.filterBox[i] = false;
    }
    if (param == 0) {
      $scope.filter[0] = "active";
      $scope.filterBox[0] = true;
    } else if (param == 1) {
      $scope.filter[1] = "active";
      $scope.filterBox[1] = true;
    } else if (param == 2) {
      $scope.filter[2] = "active";
      $scope.filterBox[2] = true;
    }
  };
});

myApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
    })
    .when("/traditional", {
      templateUrl: "traditional.html",
    })
    .when("/contemporary", {
      templateUrl: "contemporary.html",
    })
    .when("/design", {
      templateUrl: "design.html",
    });
});
