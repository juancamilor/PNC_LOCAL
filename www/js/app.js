// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
      
      
      //var push = new Ionic.Push({
      //    "debug": true
      //});

      //push.register(function (token) {
      //    console.log("Device token:", token.token);
      //});
      
      //var io = Ionic.io();
      //var push = new Ionic.Push({
      //    "onNotification": function (notification) {
      //        alert('Notification-title : ' + notification.title + '- body:' + notification.body);
      //    },
      //    "pluginConfig": {
      //        "android": {
      //            "iconColor": "#0000FF"
      //        }
      //    }
      //});
      //var user = Ionic.User.current();

      ////if (!user.id) {
      //user.id = Ionic.User.anonymousId();
      //console.log('user id:' + user.id);
      ////}

      //// Just add some dummy data..
      //user.set('name', 'Camilo Ramirez');
      //user.set('bio', 'Software dev');
      //user.save();

      //var callback = function (data) {
      //    try {
      //        console.log(data);
      //        console.log('GCM registration token:' + data.token);
      //        alert(data.token);
      //    }
      //    catch (err) {
      //        console.log('err in callback');
      //        console.log('err in callback:' + err);
      //    }
      //    push.addTokenToUser(user);
      //    user.save();
      //};
      //push.register(callback);

      

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
