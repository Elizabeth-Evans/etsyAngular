angular
  .module('etsyAngular')
  .service('TinyService',function($http) {
    var url = "https://tiny-tiny.herokuapp.com/collections/etsycart";

    function getBag() {
      return $http.get(url)
    }
    function postBag(post) {
      return $http.post(url,post);
    }
    function deleteBag(id) {
      return $http.delete(url + '/' + id);
    }

    return {
      getWangul: getBag,
      newWangulCreation: postBag,
      deleteWangul: deleteBag
    };
  })
