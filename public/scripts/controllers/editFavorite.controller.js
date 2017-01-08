angular.module('videoGameApp')
       .controller('EditFavoriteController', EditFavoriteController);

function EditFavoriteController (favServ, $uibModalInstance) {

  var ctrl = this;

  ctrl.removeFavorite = function() {
    // ctrl.favoriteToRemove = favServ.getFavoriteId();
    favServ.removeFavorite(favServ.storedFavorite.id).then(function(response){
      console.log('Favorite Deleted!', response);
    })
  };

  ctrl.closeModal = function() {
    $uibModalInstance.close();
  }
}
