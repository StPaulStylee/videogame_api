angular.module('videoGameApp')
       .controller('favoritesController', favoritesController);

function favoritesController(favServ, $uibModal) {

  var ctrl = this;

  ctrl.getFavorites = function() {
    ctrl.favoritesList;
    favServ.getFavorites().then(function(favorites){
      ctrl.favoritesList = favorites.data;
    });
  };

  ctrl.openFavoritesModal = function(data) {
    // send data to service to be retrieved from addFavorite function
    favServ.gameDataStorage(data);
    var modalInstance = $uibModal.open({
      templateUrl: 'views/addFavoritesModal.html',
      controller: 'NewFavoriteController as newFavorite'
    });
    modalInstance.result.then(ctrl.getFavorites);
  };

  ctrl.openEditFavoritesModal = function(gameObject) {
    favServ.gameDataStorage(gameObject);
    var modalInstance = $uibModal.open({
      templateUrl: 'views/editFavoritesModal.html',
      controller: 'EditFavoriteController as editFavorite'
    });
    modalInstance.result.then(ctrl.getFavorites);
  };

  ctrl.getFavorites();

} // end of favoritesController
