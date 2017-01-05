angular.module('videoGameApp')
       .controller('favoritesController', favoritesController);

function favoritesController(favServ, $uibModal) {
  console.log('favoritesController Loaded');

  var ctrl = this;

  ctrl.addFavorite = function() {
    //retrieve data from service
    ctrl.favoriteToAdd = favServ.getStoredFavorite()
      // console.log(ctrl.favoriteToAdd);
    favServ.addFavorite(ctrl.favoriteToAdd).then(function(response){
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

  ctrl.openFavoritesModal = function(data) {
    // send data to service to be retrieved from addFavorite function
    favServ.favoriteDataStorage(data);
    var modalInstance = $uibModal.open({
      templateUrl: 'views/favoritesModal.html',
      controller: 'favoritesController as favorite'
    });
  }
  // On load of favorites partial, get all favorites
  ctrl.getFavorites();

} // end of favoritesController
