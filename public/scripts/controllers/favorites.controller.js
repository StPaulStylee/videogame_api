angular.module('videoGameApp')
       .controller('favoritesController', favoritesController);

function favoritesController(favServ) {
  console.log('favoritesController Loaded');

  var ctrl = this;

  ctrl.addFavorite = function(data) {
    favServ.addFavorite(data).then(function(response){
      console.log('Favorite Added!', response);
    });
  };

  ctrl.getFavorites = function() {
    ctrl.favoritesList;
    favServ.getFavorites().then(function(favorites){
      ctrl.favoritesList = favorites.data;
    //  console.log(ctrl.favoritesList);
    });
  };

  ctrl.removeFavorite = function() {
    console.log('clicked');
  };
  // On load of favorites partial, get all favorites
  ctrl.getFavorites();

} // end of favoritesController
