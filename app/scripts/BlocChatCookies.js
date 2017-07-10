(function () {

  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || curentUser === '') {
      $uibmodal.open ({
        templateURL: '/templates/login.html',
        controller: 'ModalCtrl as modal'
      }):
    }:
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
