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
// This modal is available when clicking "add to wishlist" from search results
  ctrl.openWishlistModal = function(gameObject) {
    wishServ.gameDataStorage(gameObject);
    var modalInstance = $uibModal.open({
      templateUrl: 'views/addWishlistModal.html',
      controller: 'NewWishlistController as newWish'
    });
    modalInstance.result.then(ctrl.getWishlist);
  };
//This modal is available when clicking "remove" when viewing wishlist
  ctrl.openRemoveWishlistModal = function(gameObject) {
    // console.log(gameObject);
    wishServ.gameDataStorage(gameObject);
    var modalInstance = $uibModal.open({
      templateUrl: 'views/editWishlistModal.html',
      controller: 'EditWishlistController as editWish'
    });
    modalInstance.result.then(ctrl.getWishlist);
  }

  ctrl.getWishlist();

}// end of wishlistController
