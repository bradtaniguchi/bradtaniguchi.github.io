/**
 * Bradley Taniguchi
 */
(function(){
  'use strict';
  angular.module('bt')
  .config(routes);
  routes.$inject=[
    '$stateProvider',
    '$urlRouterProvider'
  ];
  function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/about');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/views/main/main.html',
        controller: 'MainController as vm'
      })
      .state('about', {
        parent: 'main',
        url: 'about',
        templateUrl: 'app/views/about/about.html',
        controller: 'AboutController as vm'
      })
      .state('repos', {
        parent: 'main',
        url: 'repos',
        templateUrl: 'app/views/repos/repos.html',
        controller: 'AboutController as vm'
      })
      .state('games', {
        parent: 'main',
        url:'games',
        templateUrl: 'app/views/games/games.html',
        controller: 'GamesController as vm'
      });
  }
})();
