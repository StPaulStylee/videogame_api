angular.module('videoGameApp')
       .controller('WishlistController', WishlistController);

function WishlistController(wishServ, $uibModal) {
  console.log('WishlistController Loaded');

  var ctrl = this;

  ctrl.getWishlist = function() {
    ctrl.wishlistItems;
    wishServ.getWishlist().then(function(wishes){
      ctrl.wishlistItems = wishes.data;
      console.log(ctrl.wishlistItems);
    });
  };

  ctrl.openWishlistModal = function(gameObject) {
    wishServ.gameDataStorage(gameObject);
    var modalInstance = $uibModal.open({
      templateUrl: 'views/addWishlistModal.html',
      controller: 'NewWishlistController as newWish'
    });
    modalInstance.result.then(ctrl.getWishlist);
  };

  ctrl.getWishlist();
}// end of wishlistController
