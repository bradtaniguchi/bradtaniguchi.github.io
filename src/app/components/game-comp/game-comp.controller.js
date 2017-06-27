/**
 * Bradley Taniguchi
 * 
 * 
 * TODO: determine how I am going to save/keep track of games
 * using Phaser or Unity? Will I use an Iframe or just a seperate page?
 */
(function(){
  'use strict';
  var gameComp = {
    templateUrl: 'app/components/game-comp/game-comp.html',
    controller: 'GameCompController as vm',
    bindings: {
      game: '<'
    }
  }
  angular.module('bt')
  .component('gameComp', gameComp)
  .controller('GameCompController', GameCompController);
  GameCompController.$inject=[
    '$log'
  ];
  function GameCompController($log) {
    var vm = this;
    vm.$onInit = onInit;
    return vm;
    
    function onInit() {
      if(vm.game === undefined) {
        $log.error('GameComp: vm.game is undefined!');
      }
    }
  }
})();