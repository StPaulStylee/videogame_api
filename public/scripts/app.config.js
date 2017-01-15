angular.module('videoGameApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/search', {
           templateUrl: 'views/search.html',
           controller: 'videoGameAPIController as api'
         }).when('/favorites', {
           templateUrl: 'views/favorites.html',
           controller: 'favoritesController as favorite'
         }).when('/wishlist', {
           templateUrl: 'views/wishlist.html',
           controller: 'WishlistController as wish'
         }).when('/about', {
           templateUrl: 'views/about.html',
           controller: 'AboutController as about'
         }).otherwise({
           redirectTo: '/search'
         });
         $locationProvider.html5Mode(true);
       });
