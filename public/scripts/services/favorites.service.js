angular.module('videoGameApp')
       .service('favServ', FavoriteService);

function FavoriteService($http) {
  var service = this;

  service.addFavorite = function(data) {
    service.newFavorite = {
      name: data.name,
      description: data.deck,
      release: data.original_release_date,
      platforms: data.platforms,
      game_rating: data.original_game_rating,
      game_image: data.image.thumb_url
    };
    console.log('From Service: ', service.newFavorite);

  };

}// End of service
