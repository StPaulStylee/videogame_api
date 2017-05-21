angular.module('videoGameApp')
       .controller('videoGameAPIController', videoGameAPIController);

function videoGameAPIController(vgAPI) {
  var ctrl = this;
  ctrl.dropdownDisplayCategory = "Game";
  ctrl.searchCategorySelected = "game";

  ctrl.searchAPI = function(searchTerm) {
    ctrl.searchResults;
    vgAPI.searchAPI(searchTerm, ctrl.searchCategorySelected).then(function(results){
      ctrl.searchResults = results.data.results;
      ctrl.searchResults.forEach(result => {
        ctrl.releaseDate = new Date(result.original_release_date);
        result.original_release_date = ctrl.releaseDate.getMonth() + 1 + "/"
                                     + ctrl.releaseDate.getDate() + "/"
                                     + ctrl.releaseDate.getFullYear();
      });
      ctrl.releaseDate = new Date();
      console.log(ctrl.searchResults);
      console.log(ctrl.releaseDate);
      // ctrl.searchResults.original_release_date = ctrl.releaseDate.getDate() + "/"
      //                   + ctrl.releaseDate.getMonth() + 1 + "/"
      //                   + ctrl.releaseDate.getFullYear();
    });
  }

  ctrl.setSearchCategory = function(searchCategory) {
    ctrl.searchCategorySelected = searchCategory[0];
    ctrl.dropdownDisplayCategory = searchCategory[1];
  }

} //End of videoGameAPIController
