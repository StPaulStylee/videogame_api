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
service.callback = function(data) {
  console.log(data);
  return data;
}

  service.searchAPI = function (query, resources) {
    return $http.jsonp(url, {
      params: {
        api_key: key,
        format: 'jsonp',
        query: query,
        resources: resources,
        limit: 30,
        callback: json_callback,
      }
    }).then(service.callback(response));
  }
} // End of VideoGameAPIService
