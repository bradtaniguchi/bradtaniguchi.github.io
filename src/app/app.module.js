/**
 * Bradley Taniguchi
 * 5/7/17
 *
 */
(function(){
  'use strict';
  angular.module('bt', ['ui.router', 'ngMaterial']).run(config);
  config.$inject=[
    '$rootScope',
    '$transitions',
    '$mdComponentRegistry',
    '$mdSidenav'
  ];
  function config($rootScope, $transitions, $mdComponentRegistry, $mdSidenav) {
    console.log('[[bt]]');
    /*add starting configuration here*/
    $rootScope.loading = false; //show loading bar
    
    $transitions.onStart({ }, function(trans) {
      // var SpinnerService = trans.injector().get('SpinnerService');
      // SpinnerService.transitionStart();
      // trans.promise.finally(SpinnerService.transitionEnd);
      $rootScope.loading = true;
      $mdComponentRegistry.when('left-sidenav').then(function() {
          $mdSidenav('left-sidenav').close();
      });
    });
    
    $transitions.onSuccess({ }, function(trans){
      $rootScope.loading = false;
    });
    /*TODO: add navbar config*/
  }
})();
