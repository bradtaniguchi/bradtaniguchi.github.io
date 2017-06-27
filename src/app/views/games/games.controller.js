/**
 * Bradley Taniguchi
 */
(function(){
  'use strict';
  angular.module('bt')
  .controller('GamesController', GamesController);
  GamesController.$inject=[
    '$log',
    '$mdToast'
  ];
  function GamesController($log, $mdToast) {
    var vm = this;
    vm.games = [
      {
        title: 'LastLunarLander',
        description: 'A unity3d game made for CTC495.'
      }
    ];
    vm.$onInit = onInit;
    return vm;
    
    function onInit() {
      $mdToast.showSimple('No Games exist yet');
    }
  }
})();