angular.module('videoGameApp')
       .controller('EditWishlistController', EditWishlistController);

function EditWishlistController(wishServ, $uibModalInstance) {
  console.log('EditWishlistController Loaded');

  var ctrl = this;

  ctrl.removeWish = function(){
    wishServ.removeWish(wishServ.storedGame.id).then(function(response){
      ctrl.closeModal();
      console.log('Wish Removed!', response);
    });
  };

  ctrl.gameName = wishServ.getStoredGameName();

  ctrl.closeModal = function() {
    $uibModalInstance.close();
  };

}//end if controller
