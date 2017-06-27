/**
 * Bradley Taniguchi
 */
(function(){
  'use strict';
  angular.module('bt')
  .config(theme);
  theme.$inject=[
    '$mdThemingProvider'
  ];
  function theme($mdThemingProvider) {
    $mdThemingProvider.definePalette('bradsPalette', {
      '50': 'e8f5f8',
      '100': 'c5e5ee',
      '200': '9ed4e3',
      '300': '77c2d7',
      '400': '5ab5cf',
      '500': '3da8c6',
      '600': '37a0c0',
      '700': '2f97b9',
      '800': '278db1',
      '900': '1a7da4',
      'A100': 'daf4ff',
      'A200': 'a7e4ff',
      'A400': '74d4ff',
      'A700': '5bccff',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': [
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        'A100',
        'A200',
        'A400',
        'A700'
      ],
      'contrastLightColors': [
        '700',
        '800',
        '900'
      ]
    });
    $mdThemingProvider.definePalette('bradsPaletteAlert', {
      '50': 'f8eae8',
      '100': 'eecac5',
      '200': 'e3a79e',
      '300': 'd78477',
      '400': 'cf695a',
      '500': 'c64f3d',
      '600': 'c04837',
      '700': 'b93f2f',
      '800': 'b13627',
      '900': 'a4261a',
      'A100': 'ffddda',
      'A200': 'ffaea7',
      'A400': 'ff7e74',
      'A700': 'ff675b',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': [
        '50',
        '100',
        '200',
        '300',
        '400',
        'A100',
        'A200',
        'A400',
        'A700'
      ],
      'contrastLightColors': [
        '500',
        '600',
        '700',
        '800',
        '900'
      ]
    });

    $mdThemingProvider.theme('theme')
    .primaryPalette('bradsPalette')
    .accentPalette('bradsPaletteAlert');

    $mdThemingProvider.setDefaultTheme('theme');
  }
})();
