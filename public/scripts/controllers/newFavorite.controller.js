angular.module('videoGameApp')
       .controller('NewFavoriteController', NewFavoriteController);

function NewFavoriteController(favServ, $uibModalInstance) {

    var ctrl = this;

    ctrl.addFavorite = function(comment) {
      //retrieve data from service
      ctrl.favoriteToAdd = favServ.getStoredGame();
      ctrl.favoriteToAdd.favorite_comment = comment;
      favServ.addFavorite(ctrl.favoriteToAdd).then(function(response){
        ctrl.closeModal();
      });
    };

    ctrl.gameName = favServ.getStoredGameName();

    ctrl.closeModal = function() {
      $uibModalInstance.close();
    }
} // End of controller
