angular.module('videoGameApp')
       .controller('NewWishlistController', NewWishlistController);

function NewWishlistController(favServ, $uibModalInstance) {
  console.log('NewWishlistController Loaded');

  var ctrl = this;

  ctrl.wishToAdd = favServ.getStoredGame();
  console.log('ctrl.wishToAdd: ', ctrl.wishToAdd);

  ctrl.addWishlistItem = function(data) {
    console.log('From form: ', data);
    // you need to get the wishlist item ready to send to service, router, db
  }

  ctrl.closeModal = function() {
    $uibModalInstance.close();
  };
}
