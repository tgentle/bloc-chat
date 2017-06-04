(function () {
  function Room($scope, $firebaseArray) {
    var firebaseRef = new Firebase("https://bloc-chat-72f24.firebaseio.com");

    $scope.rooms = $firebaseArray(firebaseRef.child('rooms'));

    $scope.addRoom = function() {
      $scope.rooms.$add ({
        name: $scope.newRoomName
      });
    };
    
    return {
      all: rooms;
    };
  }



  angular
    .module('blocChat')
    .factory('Room', ['$scope', '$firebaseArray', Room]);
})();

//var Room = {};
//  var ref = firebase.database().ref().child("rooms");
//  var rooms = $firebaseArray(ref);
  //return {
  //  all: rooms
//  };
//}
