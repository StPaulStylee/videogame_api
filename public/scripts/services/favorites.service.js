angular.module('videoGameApp')
       .service('favServ', FavoriteService);

function FavoriteService($http) {
  var service = this;
  service.storedFavorite = {};

// This receives data from the modalInstance and when called, returns the data
// to the addFavorite function so it then can be routed to the DB
  service.favoriteDataStorage = function(data) {
     service.storedFavorite = data;
  }

  service.getStoredFavorite = function() {
    return service.storedFavorite;
  }

  service.addFavorite = function(data) {
    service.newFavorite = {
      title: data.name,
      description: data.deck,
      release_date: data.original_release_date,
      platforms: service.getPlatforms(data),
      game_rating: service.getRating(data),
      game_image: data.image.thumb_url,
      favorite_comment: data.favorite_comment
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
      if (gameInfo.platforms != null){
        for(var i = 0; i < gameInfo.platforms.length; i++) {
          service.platforms.push(gameInfo.platforms[i].name);
        }
        return service.platforms;
      } else {
        return null;
      }
    }

    service.getRating = function(gameInfo) {
      service.ratings = [];
      if (gameInfo.original_game_rating != null) {
        for(var i = 0; i < gameInfo.original_game_rating.length; i++) {
          service.ratings.push(gameInfo.original_game_rating[i].name);
        }
        return service.ratings;
      } else {
        return null;
      }
    }

  } // End of service
