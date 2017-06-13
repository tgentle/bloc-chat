(function () {
  function ModalCtrl(Room, $uibModalInstance){
      this.cancel = function () {
        $uibModalinstance.dissmiss();
      };

      this.submit = function () {
        
        $uibmodalInstance.close();
      };
    }

    angular
      .module('blocChat')
      .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl])
})();
