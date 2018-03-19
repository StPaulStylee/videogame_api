angular.module('videoGameApp')
       .service('vgAPI', VideoGameAPIService);

function VideoGameAPIService ($http, $sce) {
  var API = '//www.giantbomb.com/api';
  var key = 'f10f942d8c6c6a04af3c3774e257daa795c10589';
  var url = $sce.trustAsResourceUrl(API + '/search/?');

  var service = this;

  service.searchAPI = function (query, resources) {
    return $http.jsonp(url, {
      params: {
        api_key: key,
        format: 'json',
        jsonpCallbackParam: 'callback',
        query: query,
        resources: resources,
        limit: 30,
      }
    }).then(function(response) {
        console.log(response);
        return response.data;
    }).catch(function(err) {
        console.log(err)
        return err
    });
  }
} // End of VideoGameAPIService
