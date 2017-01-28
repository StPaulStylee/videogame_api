angular.module('videoGameApp')
       .controller('NavigationController', NavigationController);

function NavigationController() {
  console.log('NavigationController Loaded');

  var ctrl = this;

  ctrl.isNavCollapsed = true;
  ctrl.isCollapsed = false;
}// end of NavigationController
