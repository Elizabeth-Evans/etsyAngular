angular
  .module('etsyAngular')
  .controller('CartController', function($scope,$location,TinyService,$routeParams) {

    TinyService.getWangul()
      .then(function(data) {
      $scope.listings = data.data;
      console.log(data);

     var total = 0;
     $scope.listings.forEach(function(el){
       total += parseFloat(el.price);
     })
     $scope.subTotal = total;

   });

    $scope.deleteWangul = function(obj) {
      TinyService.deleteWangul(obj._id)
        .then(function(data) {
          var objId = data.data._id
          var objPlace = $scope.listings.findIndex(function(el,idx,arr) {
            return el._id === objId
          });
          $scope.listings.splice(objPlace,1);
        });
}
})
