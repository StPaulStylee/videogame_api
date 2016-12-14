angular.module('videoGameApp')
       .service('vgAPI', VideoGameAPIService);

function VideoGameAPIService ($http) {
  var API = 'http://www.giantbomb.com/api';
  var key = 'f10f942d8c6c6a04af3c3774e257daa795c10589';

  var service = this;
  // Uses a search query to find matching game info
  service.searchAPI = function (query) {
    return $http.get(API + '/search', {
      params: {
        api_key: key,
        //format: 'json',
        query: query,
        resources: 'game'
      }
    }).then(function(response){
        return response;
    });
  };


} // End of VideoGameAPIService
