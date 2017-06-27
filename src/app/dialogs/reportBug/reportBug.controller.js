/**
 * Bradley Taniguchi
 */
(function(){
  'use strict';
  angular.module('bt')
  .controller('ReportBugController', ReportBugController);
  ReportBugController.$inject=[
    '$log',
    '$mdDialog'
  ];
  function ReportBugController($log, $mdDialog) {
    var vm = this;
    vm.message = {};
    vm.close = close;
    vm.submit = submit;
    return vm;
    
    function close() {
      $mdDialog.cancel();
    }
    
    function submit(message) {
      $log.log(message);
      $mdDialog.hide(message);
    }
  }
})();