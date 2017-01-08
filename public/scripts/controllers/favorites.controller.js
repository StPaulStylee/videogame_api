angular.module('videoGameApp')
       .controller('favoritesController', favoritesController);

function favoritesController(favServ, $uibModal) {
  console.log('favoritesController Loaded');

  var ctrl = this;

  ctrl.getFavorites = function() {
    ctrl.favoritesList;
    favServ.getFavorites().then(function(favorites){
      ctrl.favoritesList = favorites.data;
    //  console.log(ctrl.favoritesList);
    });
  };

  ctrl.openFavoritesModal = function(data) {
    // send data to service to be retrieved from addFavorite function
    favServ.favoriteDataStorage(data);
    var modalInstance = $uibModal.open({
      templateUrl: 'views/addFavoritesModal.html',
      controller: 'NewFavoriteController as newFavorite'
    });
  };

  ctrl.openEditFavoritesModal = function(gameObject) {
    favServ.favoriteDataStorage(gameObject);
    var modalInstance = $uibModal.open({
      templateUrl: 'views/editFavoritesModal.html',
      controller: 'EditFavoriteController as editFavorite'
    });
    modalInstance.result.then(ctrl.getFavorites());
  };

  ctrl.getFavorites();

} // end of favoritesController
