angular.module('videoGameApp')
       .service('favServ', FavoriteService);

function FavoriteService($http) {
  var service = this;
  service.storedGame = {};

// This receives data from the modalInstance and when called, returns the data
// to the addFavorite function so it then can be routed to the DB
// It also created object properties that can be accesed by by other controller
// functions
  service.gameDataStorage = function(gameObject) {
     service.storedGame = gameObject;
     service.storedGame.id = gameObject.id;
     service.storedGame.favorite_comment = gameObject.favorite_comment;
  }

  service.getStoredGame = function() {
    return service.storedGame;
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

  service.submitEdit = function(comment){
    console.log('From service submitEdit: ', service.storedGame, comment);
    service.storedGame.favorite_comment = comment;
    return $http.put('/favorites/' + service.storedGame.id, service.storedGame).then(function(response){
      return response;
    });
  }

  service.removeFavorite = function(favoriteId) {
    return $http.delete('/favorites/' + favoriteId).then(function(response){
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
    // service.getRating allows just the name to be pulled from the rating object
    // and sent to the database
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
