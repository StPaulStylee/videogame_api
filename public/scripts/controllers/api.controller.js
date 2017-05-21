angular.module('videoGameApp')
       .controller('videoGameAPIController', videoGameAPIController);

function videoGameAPIController(vgAPI) {
  var ctrl = this;
  ctrl.dropdownDisplayCategory = "Game";
  ctrl.searchCategorySelected = "game";

// When expanding the search functionality, you'll need to add a "search location" or
// something like that as a second paramerter
  ctrl.searchAPI = function(searchTerm) {
    ctrl.searchResults;
    vgAPI.searchAPI(searchTerm, ctrl.searchCategorySelected).then(function(results){
      ctrl.searchResults = results.data.results;
    });
  }

  ctrl.setSearchCategory = function(searchCategory) {
    ctrl.searchCategorySelected = searchCategory[0];
    ctrl.dropdownDisplayCategory = searchCategory[1];
  }

} //End of videoGameAPIController
