(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomID = function(roomId) {
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    Message.send = function(newMessage) {
      newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
      messages.$add(newMessage)
    };

    return Message;
  }

  angular
  .module('blocChat')
  .factory('Message', ['$firebaseArray', Message]);
})();
