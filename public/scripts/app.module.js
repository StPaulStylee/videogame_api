angular.module('videoGameApp', ['ngRoute', 'ui.select', 'ngSanitize', 'ngAnimate', 'ui.bootstrap']);
  .config(['$sceDelegateProvider', function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist({
      'self',
      '//www.giantbomb.com/api/search'
    });
  }]);
