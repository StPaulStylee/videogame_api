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
    console.log('From service: ', wishObjectToSend);
    service.newWish = {
      title: wishObjectToSend.title,
      description: wishObjectToSend.description,
      platform: wishObjectToSend.platform,
      game_image: wishObjectToSend.game_image
    };
    return $http.post('/wishlist', service.newWish)
      .then(function(response){
        return response;
      });
    };








}// end of service
