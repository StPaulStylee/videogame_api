angular.module('videoGameApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/home', {
           templateUrl: 'views/home.html',
           controller: 'videoGameAPIController as api'
         }).when('/favorites', {
           templateUrl: 'views/favorites.html',
           controller: 'favoritesController as favorite'
         }).when('/wishlist', {
           templateUrl: 'views/wishlist.html',
           controller: 'wishlistController as wish'
         }).when('/your_rankings', {
           templateUrl: 'views/your_rankings.html',
           controller: 'rankingsController as rank'
         }).otherwise({
           redirectTo: '/home'
         });
         $locationProvider.html5Mode(true);
       });

console.log('config loaded!');
