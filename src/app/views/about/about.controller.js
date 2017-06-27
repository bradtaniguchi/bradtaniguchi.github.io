(function(){
  'use strict';
  angular.module('bt')
  .controller('AboutController', AboutController);
  AboutController.$inject=[
    '$log',
    'aboutTiles',
    '$mdDialog',
    '$mdToast'
  ];
  function AboutController($log, aboutTiles, $mdDialog, $mdToast) {
    var vm = this;
    vm.tiles = aboutTiles;
    vm.$onInit = onInit;
    vm.report = report;
    return vm;
    /*function defintions*/
    function onInit() {
      $log.debug('In About');
    }
    function report(ev) {
      $mdDialog.show({
        templateUrl: 'app/dialogs/reportBug/reportBug.html',
        controller: 'ReportBugController as vm',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
      }).then(function(){
        $mdToast.show('Sent report!');
      }).catch(function(err){
        if(err !==undefined) {$log.error(err);}
      });
    }
  }
})();