angular.module('videoGameApp')
       .controller('videoGameAPIController', videoGameAPIController);

function videoGameAPIController(vgAPI) {
  var ctrl = this;
  console.log('videoGameAPIController Loaded');

  ctrl.searchAPI = function(searchTerm) {
    var searchResults;
    vgAPI.searchAPI(searchTerm).then(function(results){
      // console.log('Results from search: ', results);
      searchResults = results;
      console.log(searchResults.data.results);
    });
  }


} //End of videoGameAPIController
