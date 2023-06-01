var firebaseConfig = {
    apiKey: "AIzaSyCWkzRSHuWVS9fGQILE3TBIuO2jdM_kZLw",
    authDomain: "kwitter-7040a.firebaseapp.com",
    databaseURL: "https://kwitter-7040a-default-rtdb.firebaseio.com",
    projectId: "kwitter-7040a",
    storageBucket: "kwitter-7040a.appspot.com",
    messagingSenderId: "958330638846",
    appId: "1:958330638846:web:17f61b37ba2955cb00f0af"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + "__" + user_name + "!!!";

function logout()
{
    localStorage.remove("user_name");
    localStorage.removeItem("chat_room.html");
    window.location(index.html);
}

function addRoom()
{
    room_name = document.getElementById("user_name");
    firebase.database.ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("user_name", user_name);
    window.location("chat_page.html");
}

