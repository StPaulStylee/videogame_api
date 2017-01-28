angular.module('videoGameApp')
       .controller('NavigationController', NavigationController);

function NavigationController() {

  var ctrl = this;

  ctrl.isNavCollapsed = true;

  ctrl.collapse = function(){
    ctrl.isNavCollapsed = !ctrl.isNavCollapsed;
  }
}// end of NavigationController
