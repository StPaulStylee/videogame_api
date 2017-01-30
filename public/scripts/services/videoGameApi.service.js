angular.module('videoGameApp')
       .service('vgAPI', VideoGameAPIService);

function VideoGameAPIService ($http) {
  var API = '//www.giantbomb.com/api';
  var key = 'f10f942d8c6c6a04af3c3774e257daa795c10589';

  var service = this;
  // Uses a search query to find matching game info
  // in future I will put resources characteristic as a function param so
  // it will be able to accomplish more dynamic searches
  service.searchAPI = function (query) {
    return $http.get(API + '/search', {
      params: {
        api_key: key,
        format: 'json',
        query: query,
        resources: 'game',
        limit: 30,
      }
    }).then(function(response){
        return response;
    });
  };


} // End of VideoGameAPIService
