angular.module('videoGameApp')
       .service('favServ', FavoriteService);

function FavoriteService($http) {
  var service = this;

  service.addFavorite = function(data) {
    service.newFavorite = {
      title: data.name,
      description: data.deck,
      release_date: data.original_release_date,
      platforms: service.getPlatforms(data),
      game_rating: service.getRating(data),
      game_image: data.image.thumb_url
    };
    return $http.post('/favorites', service.newFavorite)
      .then(function(response){
        return response;
      });
    };

    service.getFavorites = function() {
      return $http.get('/favorites')
        .then(function(favorites){
          return favorites;
        });
    };

    // service.getPlatforms allows just the name to be pulled from the platform object
    // and sent to the database
    service.getPlatforms = function(gameInfo) {
      service.platforms = [];
      for(var i = 0; i < gameInfo.platforms.length; i++) {
        service.platforms.push(gameInfo.platforms[i].name);
      }
      return service.platforms;
    }

    service.getRating = function(gameInfo) {
      service.ratings = [];
      for(var i = 0; i < gameInfo.original_game_rating.length; i++) {
        service.ratings.push(gameInfo.original_game_rating[i].name);
      }
      return service.ratings;
    }

  } // End of service
