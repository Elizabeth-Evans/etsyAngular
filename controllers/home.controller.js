angular
  .module('etsyAngular')
  .controller('HomeController', function($scope,$location,ApiEtsyService,TinyService,$routeParams) {

    ApiEtsyService.getProducts()
      .then(function(data) {
      $scope.listings = data.data.results;
      console.log(data);
    });

    $scope.addToCart = function(post){
      TinyService.newWangulCreation(post)
        .then(function(data) {
          console.log("UAU",data)
          $location.path('/');
        })
    }
    $scope.itemClick = function (item) {
      item.isClicked = true;
  }


})
