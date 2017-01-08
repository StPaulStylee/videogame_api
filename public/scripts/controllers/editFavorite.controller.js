angular.module('videoGameApp')
       .controller('EditFavoriteController', EditFavoriteController);

function EditFavoriteController (favServ, $uibModalInstance) {

  var ctrl = this;

  ctrl.removeFavorite = function() {
    // ctrl.favoriteToRemove = favServ.getFavoriteId();
    favServ.removeFavorite(favServ.storedFavorite.id).then(function(response){
      ctrl.closeModal();
      console.log('Favorite Deleted!', response);
    });
  };

  ctrl.getComment = function() {
    return favServ.storedFavorite.favoriteComment;
  }

  ctrl.closeModal = function() {
    $uibModalInstance.close();
  }
}
