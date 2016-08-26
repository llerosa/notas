angular.module('starter.services', ["ionic","firebase"])
.factory("Items", function($firebaseArray) {
  var itemsRef = new Firebase("https://notas-38791.firebaseio.com");
  return $firebaseArray(itemsRef);
})

.factory('Chats', function() {
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet placerat odio. Aenean non erat nec purus lacinia maximus ac non nulla. In non feugiat purus, sed lobortis augue. Integer placerat malesuada odio, quis efficitur sapien. Sed fermentum purus vel tincidunt commodo. Aenean nec nisl vitae felis varius sagittis et a tortor. Praesent placerat, magna eget posuere aliquet, dui elit sagittis nulla, a finibus dui risus venenatis erat. Mauris varius pharetra dui a feugiat. Nulla imperdiet in eros eu ultrices.'
  }, {
    id: 1,
    name: 'Max Lynx',
    Text: 'Hey, it\'s me'
    
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
