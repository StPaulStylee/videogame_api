angular.module('videoGameApp')
       .controller('EditFavoriteController', EditFavoriteController);

function EditFavoriteController (favServ, $uibModalInstance) {

  var ctrl = this;
  // ctrl.commentDisabled = true;
  // ctrl.editClicked = false;

  ctrl.removeFavorite = function() {
    // ctrl.favoriteToRemove = favServ.getFavoriteId();
    favServ.removeFavorite(favServ.storedFavorite.id).then(function(response){
      ctrl.closeModal();
      console.log('Favorite Deleted!', response);
    });
  };

  ctrl.disableCommentEdit = function() {
    ctrl.commentDisabled = true;
    ctrl.editClicked = false;
  }

  ctrl.enableCommentEdit = function() {
    ctrl.editClicked = true;
    ctrl.commentDisabled = false;
  };

  ctrl.getComment = function() {
    return favServ.storedFavorite.favoriteComment;
  }

  ctrl.closeModal = function() {
    $uibModalInstance.close();
  }
  ctrl.disableCommentEdit();
}
