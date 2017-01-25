angular.module('videoGameApp')
       .service('wishServ', WishlistService);

function WishlistService($http) {
  var service = this;

  service.gameDataStorage = function(gameObject) {
     service.storedGame = gameObject;
     service.storedGame.id = gameObject.id;
  };

  service.getStoredGame = function() {
    return service.storedGame;
  };

  service.addWishlistItem = function(wishObjectToSend) {
    console.log('From Wishlist service: ', wishObjectToSend);
    service.newWish = {
      title: wishObjectToSend.title,
      description: wishObjectToSend.description,
      platform: wishObjectToSend.platform.name,
      game_image: wishObjectToSend.game_image,
      site_detail_url: wishObjectToSend.site_detail_url
    };
    return $http.post('/wishlist', service.newWish)
      .then(function(response){
        return response;
      });
    };

  service.getWishlist = function() {
    return $http.get('/wishlist')
      .then(function(wishes){
        return wishes;
      });
  };

  service.removeWish = function(wishId) {
    return $http.delete('/wishlist/' + wishId).then(function(response){
      return response;
    });
  };









}// end of service
