angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams) {
  //$scope.chat = Chats.get($stateParams.chatId);
  var par = $stateParams.Id;
  var miUrl = "https://notas-38791.firebaseio.com/"+par;
  var detalles = new Firebase(miUrl);
  detalles.once('value', function(dataSnapshot) {
    // code to handle new value.
    var data = dataSnapshot.val();
    $scope.item = data;
    
  });
  
  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})


.controller("ListCtrl", function($scope, Items) {
  $scope.items = Items;
  $scope.addItem = function() {
    var myTitle = document.getElementById("texto").value;
    var myDesc = document.getElementById("desc").value;
    alert("nota enviada");
    document.getElementById("texto").value ="";
    document.getElementById("desc").value ="";
    if (myTitle) {
      $scope.items.$add({
        "title": myTitle,
        "desc": myDesc
      });
    }
  };
  $scope.elimina = function(itemElimina){
    var eliminalo = new Firebase("https://notas-38791.firebaseio.com/"+itemElimina);
    eliminalo.remove();
  };
});
