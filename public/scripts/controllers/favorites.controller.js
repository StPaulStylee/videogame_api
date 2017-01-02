angular.module('videoGameApp')
       .controller('favoritesController', favoritesController);

function favoritesController(favServ) {
  console.log('favoritesController Loaded');

  var ctrl = this;

  ctrl.addFavorite = function(data) {
    favServ.addFavorite(data).then(function(response){
      console.log('Favorite Added!', response);
    });
  };


}// end of favoritesController
