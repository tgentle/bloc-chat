(function () {
  function RoomCtrl($scope, Room) {
    $scope.rooms = Room;
    $scope.currentRoom = null;


    //$scope.rooms = ref;

    $scope.addRoom = function() {
      $scope.rooms.$add ({
        name: $scope.newRoomName
      });
    }
    this.rooms = Room;
    return $scope.rooms;
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', RoomCtrl])
})();
