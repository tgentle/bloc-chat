(function() {
  function Room($firebaseArray) {
    var Room = {}
    var ref = firebase.database().ref("rooms");
    var rooms = $firebaseArray(ref);

    return {
    all: rooms
  };
};

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
