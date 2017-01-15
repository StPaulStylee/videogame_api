angular.module('videoGameApp')
       .controller('videoGameAPIController', videoGameAPIController);

function videoGameAPIController(vgAPI) {
  var ctrl = this;
  //ctrl.searchResults = [];
  console.log('videoGameAPIController Loaded');

// When expanding the search functionality, you'll need to add a "search location" or
// something like that as a second paramerter
  ctrl.searchAPI = function(searchTerm) {
    ctrl.searchResults;
    vgAPI.searchAPI(searchTerm).then(function(results){
      console.log('Results from search: ', results);
      ctrl.searchResults = results.data.results;
      console.log('Saved object: ', ctrl.searchResults);
    });
  }



} //End of videoGameAPIController
