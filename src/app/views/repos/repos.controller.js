/**
 * Bradley Taniguchi
 * 6/6/17
 */
(function(){
  'use strict';
  angular.module('bt')
  .controller('ReposController', ReposController);
  ReposController.$inject=[
    '$log'
    ];
  function ReposController($log) {
    var vm = this;
    return vm;
  }
})();