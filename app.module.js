angular
  .module('etsyAngular',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "templates/index.html",
        controller: "HomeController"
      })
      .when('/productPage/:id', {
        templateUrl: 'templates/productPage.html',
        controller: "ProductPageController"
      })
      .when('/cart', {
        templateUrl:'templates/cart.html',
        controller: 'CartController'
      })
      .when('/404',{
        template: '<h1> OOPS! </h1>',
        controller: 'HomeController'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })
