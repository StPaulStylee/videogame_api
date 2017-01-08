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

  // ctrl.openRemoveFavoriteModal = function(data) {
  //   var modalInstance = $uibModal.open({
  //     templateUrl: 'views/confirmRemoveModal.html',
  //     controller: 'favoritesController as favorite'
  //   });
  // };

  ctrl.openEditFavoritesModal = function(gameObject) {
    favServ.favoriteDataStorage(gameObject);
    var modalInstance = $uibModal.open({
      templateUrl: 'views/editFavoritesModal.html',
      controller: 'EditFavoriteController as editFavorite'
    });
  };

  ctrl.getComment = function() {
    // console.log('From getComment function: ', favServ.favoriteComment);
    return favServ.storedFavorite.favoriteComment;
  }

  // Close modal when cancel button is clicked
  // ctrl.closeModal = function() {
  //   ctrl.closeModalBoolean = true;
  // }
  // On load of favorites partial, get all favorites
  ctrl.getFavorites();

} // end of favoritesController
