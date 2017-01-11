angular.module('videoGameApp')
       .controller('EditFavoriteController', EditFavoriteController);

function EditFavoriteController (favServ, $uibModalInstance) {

  var ctrl = this;

  ctrl.submitEdit = function (comment) {
    console.log("New Comment: ", comment);
    favServ.submitEdit(comment).then(function(response){
      ctrl.closeModal();
      console.log('Comment Updated!', response);
    });
  };

  ctrl.removeFavorite = function() {
    // ctrl.favoriteToRemove = favServ.getFavoriteId();
    favServ.removeFavorite(favServ.storedGame.id).then(function(response){
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
    return favServ.storedGame.favorite_comment;
  }

  ctrl.closeModal = function() {
    $uibModalInstance.close();
  }
  ctrl.disableCommentEdit();
}
