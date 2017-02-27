angular.module('videoGameApp')
       .controller('videoGameAPIController', videoGameAPIController);

function videoGameAPIController(vgAPI) {
  var ctrl = this;

// When expanding the search functionality, you'll need to add a "search location" or
// something like that as a second paramerter
  ctrl.searchAPI = function(searchTerm) {
    ctrl.searchResults;
    vgAPI.searchAPI(searchTerm).then(function(results){
      ctrl.searchResults = results.data.results;
    });
  }

} //End of videoGameAPIController
