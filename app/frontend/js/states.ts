namespace app {

  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap', 'satellizer']).config((
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    $authProvider
  ) => {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'controller'
    })
    .state('404', {
      url: '/404',
      templateUrl: '/views/404.html'
    });

    $urlRouterProvider.otherwise('/404');

    $locationProvider.html5Mode(true);
  });

}
