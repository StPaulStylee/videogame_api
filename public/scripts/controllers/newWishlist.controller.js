angular.module('videoGameApp')
       .controller('NewWishlistController', NewWishlistController);

function NewWishlistController(wishServ, $uibModalInstance) {
  console.log('NewWishlistController Loaded');

  var ctrl = this;

  ctrl.wishToAdd = wishServ.getStoredGame();
  console.log('ctrl.wishToAdd: ', ctrl.wishToAdd);

  ctrl.addWishlistItem = function(wishlistItemPlatform) {
    ctrl.wishObjectToSend = {
      title: ctrl.wishToAdd.name,
      description: ctrl.wishToAdd.deck,
      platform: wishlistItemPlatform,
      game_image: ctrl.wishToAdd.image.thumb_url
    };
    wishServ.addWishlistItem(ctrl.wishObjectToSend).then(function(response){
      console.log('Wishlist Item added!');
      ctrl.closeModal();
    })
  };

  ctrl.closeModal = function() {
    $uibModalInstance.close();
  };
}
