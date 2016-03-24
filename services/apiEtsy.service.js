angular
  .module('etsyAngular')
  .service('ApiEtsyService',function($http,$q) {

    var cors = 'https://free-cors-server.herokuapp.com/any-request/';
    var key = '5fb0zpl4ocec347vjx1xlhxl';
    var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key + '&includes=MainImage');
    var itemUrl = 'https://openapi.etsy.com/v2/listings/';

   function getProducts() {
     return $http.get(cors + url);
   };
   function showProduct(listingId) {
     return $http.get(cors + encodeURIComponent(itemUrl + listingId + '?api_key=' + key + '&includes=MainImage'))
   };

    return {
      getProducts: getProducts,
      showProduct: showProduct,
    }

  });
