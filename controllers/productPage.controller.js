angular
  .module('etsyAngular')
  .controller('ProductPageController', function($scope,$location,ApiEtsyService,TinyService,$routeParams) {


    ApiEtsyService.showProduct($routeParams.id)
    .then(function(data) {
    $scope.listing =data.data.results[0];
    console.log(data);
    })

    $scope.addToCart = function(post){
      TinyService.newWangulCreation(post)
        .then(function(data) {
          console.log("UAU",data);
        })
    }
})
