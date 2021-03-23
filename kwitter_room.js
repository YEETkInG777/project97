 var firebaseConfig = {
    apiKey: "AIzaSyCNAYCy6ijm8c89w72rNG5jDPl7mMtC5KA",
    authDomain: "project-94-483fa.firebaseapp.com",
    databaseURL: "https://project-94-483fa-default-rtdb.firebaseio.com",
    projectId: "project-94-483fa",
    storageBucket: "project-94-483fa.appspot.com",
    messagingSenderId: "267414297947",
    appId: "1:267414297947:web:3bea03f7f8fc6639dd8e7e",
    measurementId: "G-HM8BRRV1H7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}








