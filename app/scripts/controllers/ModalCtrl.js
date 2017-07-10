(function () {
  function ModalCtrl(Room, $uibModalInstance, $cookies){
      this.cancel = function () {
        $uibModalinstance.dissmiss();
      };

      this.submit = function () {

        $uibmodalInstance.close();
      };

      this.createUser = function() {
        $cookies.put('blocChatCurrentUser', this.username);
        $uibModalInstance.close();
      }
    }

    angular
      .module('blocChat')
      .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl])
})();
