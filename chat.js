// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCP0P7h7to71wkKdbPrFPeKUGYtz_4lAD4",
    authDomain: "lets-chat-web-app-1-te.firebaseapp.com",
    projectId: "lets-chat-web-app-1-te",
    storageBucket: "lets-chat-web-app-1-te.appspot.com",
    messagingSenderId: "256917328386",
    appId: "1:256917328386:web:f402d37252b51109704d1b",
    measurementId: "G-PQQ6W6X1S1"
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
document.getElementById("user_name")= "Welcome" + "__" + user_name + "!!!";


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    user_name = document.getElementByIdlementById("user_name");
  localStorage.setItem("user_name", user_name);
     window.location = "chat_room.html";
  
}



