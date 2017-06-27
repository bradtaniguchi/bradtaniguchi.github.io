/**
 * Bradley Taniguchi
 */
(function(){
  'use strict';
  angular.module('bt')
  .controller('MainController', MainController);
  MainController.$inject=[
    '$log',
    '$state',
    '$mdSidenav',
    '$window',
    '$mdDialog',
    'navbarApps'
  ];
  function MainController($log, $state, $mdSidenav, $window, $mdDialog, navbarApps) {
    var vm = this;
    vm.toggleNav = toggleNav;
    vm.redirectToPage = redirectToPage;
    vm.apps = navbarApps;
    vm.go = go;
    return vm;

    function toggleNav() {
      $log.debug('toggle nav');
      $mdSidenav('left-sidenav').toggle();
    }

    function redirectToPage(ev) {
      var gitPage = "https://github.com/bradtaniguchi";
      var dialog = $mdDialog.confirm()
        .title('Redirect To Github')
        .textContent('This will redirect you my github profile is that ok?')
        // .ariaLabel("")
        .targetEvent(ev)
        .ok('Yes')
        .cancel('No');

      $mdDialog.show(dialog).then(function(){
        $window.location = gitPage;
      }, function(){
        $log.debug('Canceled');
      });
    }
    function go(state) {
      $log.debug(state);
      $state.go(state);
    }
  }
})();
