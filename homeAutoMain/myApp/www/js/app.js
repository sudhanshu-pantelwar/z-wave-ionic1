// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('eMeMate', ['ionic', 'eMeMate.controllers', 'eMeMate.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('top');

        $stateProvider

            // .state('app', {
            //     url: '/app',
            //     abstract: true,
            //     templateUrl: 'templates/sidebar.html',
            //     controller: 'AppCtrl'
            //   })
            // .state('app.login', {
      
            //     url: '/login',
            //     views: {
            //       'mainContent': {
            //         templateUrl: 'templates/login.html',
            //         controller: 'LoginCtrl'
            //   }
            // }
            // });

            .state('login', {
              url: '/login',
              templateUrl: 'templates/login.html',
              controller: 'LoginCtrl'
            })

            .state('tabs', {
              url: '/main',
              abstract: true,
              templateUrl: 'templates/main.html',

            })

    //         .state('tabs.home', {
    //   url: "/home",
    //   views: {
    //     'home-tab': {
    //       templateUrl: "templates/home.html",
    //       controller: 'HomeTabCtrl'
    //     }
    //   }
    // })
            .state('tabs.rooms',{
              url: '/rooms',
              views:{
                'rooms-tab':{
                  templateUrl: 'templates/rooms.html',
                  controller: 'RoomsCtrl'
                }
              }
            })

            .state('tabs.category',{
              url: '/category',
              views:{
                'category-tab':{
                  templateUrl: 'templates/category.html',
                  controller: 'CategoryCtrl'
                }
              }
            })

            .state('roomDevices', {
              url: '/roomDevices',
              templateUrl: 'templates/roomDevices.html',
              controller: 'RoomsCtrl'
            });
            // .state('main', {
            //  url: '/main',
        
            //  templateUrl: 'templates/main.html',
            //  controller: 'MainCtrl'
                          
            //  })

            //  .state('tab.rooms', {
            //  url: '/rooms',
            //  views: {
            //  'tab-dash': {
            //  templateUrl: 'templates/rooms.html',
            //  controller: 'RoomsCtrl'
            //  }
            //  }
            //  })
             
            //  .state('tab.friends', {
            //  url: '/category',
            //  views: {
            //  'tab-friends': {
            //  templateUrl: 'templates/category.html',
            //  controller: 'CategoryCtrl'
            //  }
            //  }
            //  });
        $urlRouterProvider.otherwise('/main/rooms');
    });