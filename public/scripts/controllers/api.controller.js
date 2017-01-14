angular.module('videoGameApp')
       .controller('videoGameAPIController', videoGameAPIController);

function videoGameAPIController(vgAPI) {
  var ctrl = this;
  //ctrl.searchResults = [];
  console.log('videoGameAPIController Loaded');

  ctrl.searchAPI = function(searchTerm, searchLocation) {
    ctrl.searchResults;
    vgAPI.searchAPI(searchTerm, searchLocation).then(function(results){
      console.log('Results from search: ', results);
      ctrl.searchResults = results.data.results;
      console.log('Saved object: ', ctrl.searchResults);
    });
  }



} //End of videoGameAPIController
