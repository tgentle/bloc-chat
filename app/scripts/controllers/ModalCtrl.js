(function () {
  function ModalCtrl(Room, $uibModalInstance){
      this.cancel = function () {
        $uibModalinstance.dissmiss();
      };

      this.submit = function () {
        Room.add(this.newRoom);
        $uibmodalInstance.close();
      };
    }

    angular
      .module('blocChat')
      .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl])
})();
