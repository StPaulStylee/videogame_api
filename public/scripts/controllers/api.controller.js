angular.module('videoGameApp')
       .controller('videoGameAPIController', videoGameAPIController);

function videoGameAPIController(vgAPI) {
  var ctrl = this;
  //ctrl.searchResults = [];
  console.log('videoGameAPIController Loaded');

  ctrl.searchAPI = function(searchTerm) {
    ctrl.searchResults;
    vgAPI.searchAPI(searchTerm).then(function(results){
      // console.log('Results from search: ', results);
      ctrl.searchResults = results.data.results;
      console.log(ctrl.searchResults);
    });
  }


} //End of videoGameAPIController
