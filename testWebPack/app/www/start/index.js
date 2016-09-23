/**
 * Created by 900etrip on 16/9/23.
 */
require('./js/controllers.js')
require('./js/services.js')
app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      template: require('./templates/tabs.html')
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          template: require('./templates/tab-dash.html'),
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          template: require('./templates/tab-chats.html'),
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          template: require('./templates/chat-detail.html'),
          controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          template: require('./templates/tab-account.html'),
          controller: 'AccountCtrl'
        }
      }
    });

}]);
