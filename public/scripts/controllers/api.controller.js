angular.module('videoGameApp')
       .controller('videoGameAPIController', videoGameAPIController);

function videoGameAPIController(vgAPI) {
  var ctrl = this;
  console.log('videoGameAPIController Loaded');

  ctrl.searchAPI = function(searchTerm) {
    console.log(searchTerm);
    vgAPI.searchAPI(searchTerm).then(function(results){
      console.log('Results from search: ', results);
    });
  }


} //End of videoGameAPIController
