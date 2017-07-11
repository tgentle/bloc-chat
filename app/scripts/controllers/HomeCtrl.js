(function () {
  function HomeCtrl(Message, Room, $cookies){
    this.rooms = Room.all;
    this.addRoom = function() {
      Room.add(this.newRoom);
    };

    this.setRoom = function(room) {
      this.currentRoom = room;
      this.currentMessages = Message.getByRoomID(this.currentRoom.$id);
    };

    this.sendMessage = function() {
      this.newMessage.roomId = this.currentRoom.$id;
      this.newMessage.username = $cookies.get('blocChatCurrentUser');
      Message.send(this.newMessage);
    };
  }

  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Message', 'Room', '$cookies', HomeCtrl])
})();
