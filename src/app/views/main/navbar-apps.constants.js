(function(){
  'use strict';
  angular.module('bt')
  .constant('navbarApps', [
    {
      icon: 'home',
      name: 'About',
      state: 'about',
    },
    {
      icon: 'library_books',
      name: 'Repositories',
      state: 'repos'
    },
    {
      icon: 'videogame_asset',
      name: 'Games',
      state: 'games'
    }
    ]);
})();