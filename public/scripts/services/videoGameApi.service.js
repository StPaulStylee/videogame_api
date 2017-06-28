angular.module('videoGameApp')
       .service('vgAPI', VideoGameAPIService);

function VideoGameAPIService ($http, $sce) {
  var API = '//www.giantbomb.com/api';
  var key = 'f10f942d8c6c6a04af3c3774e257daa795c10589';
  var url = $sce.trustAsResourceUrl(API + '/search');

  var service = this;
  // Uses a search query to find matching game info
  // in future I will put resources characteristic as a function param so
  // it will be able to accomplish more dynamic searches
  service.searchAPI = function (query, resources) {
    return $http.jsonp(url, {
      params: {
        api_key: key,
        format: 'json',
        query: query,
        resources: resources,
        limit: 30,
        jsonpCallbackParam: 'callback',
      },
    }).then(function(response){
        service.data = response.data;
        console.log(service.data);
        return service.data;
    }, function(error){
        console.log(error);
    });
  };


} // End of VideoGameAPIService
