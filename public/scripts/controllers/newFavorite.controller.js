angular.module('videoGameApp')
       .controller('NewFavoriteController', NewFavoriteController);

function NewFavoriteController(favServ, $uibModalInstance) {

    var ctrl = this;

    ctrl.addFavorite = function(comment) {
      console.log(comment);
      //retrieve data from service
      ctrl.favoriteToAdd = favServ.getStoredFavorite();
      ctrl.favoriteToAdd.favorite_comment = comment;
      favServ.addFavorite(ctrl.favoriteToAdd).then(function(response){
        console.log('Favorite Added!', response);
      });
    };

    ctrl.closeModal = function() {
      $uibModalInstance.close();
    }
} // End of controller
