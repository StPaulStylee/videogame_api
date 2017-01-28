angular.module('videoGameApp')
       .controller('NewWishlistController', NewWishlistController);

function NewWishlistController(wishServ, $uibModalInstance) {

  var ctrl = this;

  ctrl.wishToAdd = wishServ.getStoredGame();
  console.log('ctrl.wishToAdd: ', ctrl.wishToAdd);

  ctrl.addWishlistItem = function(wishlistItemPlatform) {
    ctrl.wishObjectToSend = {
      title: ctrl.wishToAdd.name,
      description: ctrl.wishToAdd.deck,
      platform: wishlistItemPlatform,
      game_image: ctrl.getImage(ctrl.wishToAdd)
    };
    wishServ.addWishlistItem(ctrl.wishObjectToSend).then(function(response){
      console.log('Wishlist Item added!');
      ctrl.closeModal();
    })
  };

  ctrl.closeModal = function() {
    $uibModalInstance.close();
  };

  ctrl.getImage = function(gameInfo) {
    if (gameInfo.image != null) {
      return gameInfo.image.small_url;
    } else {
      return null;
    }
  }
}
