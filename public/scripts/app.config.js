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
         }).when('/your_rankings', {
           templateUrl: 'views/your_rankings.html',
           controller: 'RankingsController as rank'
         }).otherwise({
           redirectTo: '/search'
         });
         $locationProvider.html5Mode(true);
       });
