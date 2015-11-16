angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {
    $scope.registerDisabled = false;
    $scope.register = function () {
        var io = Ionic.io();
        var push = new Ionic.Push({
            "onNotification": function (notification) {
                alert('Notification-title : ' + notification.title + '- body:' + notification.body);
            },
            "pluginConfig": {
                "android": {
                    "iconColor": "#0000FF"
                }
            }
        });
        var user = Ionic.User.current();

        //if (!user.id) {
        user.id = Ionic.User.anonymousId();
        console.log('user id:' + user.id);
        //}

        // Just add some dummy data..
        user.set('name', 'Camilo Ramirez');
        user.set('bio', 'Software dev');
        user.save();

        var callback = function (data) {
            try {
                $scope.regId = data.token;
                $scope.$apply();
                //console.log(data);
                console.log('GCM registration token:' + data.token);
                alert(data.token);
            }
            catch (err) {
                console.log('err in callback');
                console.log('err in callback:' + err);
            }
            push.addTokenToUser(user);
            user.save();
        };
        push.register(callback);
        

        $scope.registerDisabled = true;
    };
    $scope.registerDev = function () {
        var io = Ionic.io();
        var push = new Ionic.Push({
            "debug": true
        });

        push.register(function (token) {
            $scope.regId = token.token;
            $scope.$apply();
            console.log("Device token:", token.token);
        });

        $scope.registerDisabled = true;
    };
    $scope.unregister = function () {
        $scope.registerDisabled = false;
    };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
