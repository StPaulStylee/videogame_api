angular.module('videoGameApp')
       .controller('WishlistController', WishlistController);

function WishlistController(wishServ, $uibModal) {
  console.log('WishlistController Loaded');

  var ctrl = this;

  ctrl.openWishlistModal = function(gameObject) {
    wishServ.gameDataStorage(gameObject);
    var modalInstance = $uibModal.open({
      templateUrl: 'views/addWishlistModal.html',
      controller: 'NewWishlistController as newWish'
    });
    //after return, call get wishlist
  };

  //get Wishlist function
}// end of wishlistController
