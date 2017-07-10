(function () {
  function HomeCtrl(Message, Room){
    this.rooms = Room.all;
    this.addRoom = function() {
      Room.add(this.newRoom);
    };

    this.setRoom = function(room) {
      this.currentRoom = room;
      this.currentMessages = Message.getByRoomID(this.currentRoom.$id);
    };

    this.sendMessage = function() {
      this.newMessage.roomId = this.currentRoom.$id
      Message.send(this.newMessage);
    };
  }

  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Message', 'Room', HomeCtrl])
})();
