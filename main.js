const firebaseConfig = {
    apiKey: "AIzaSyBxlsUUbsgJmbZ0bRqmMv6pwDBAaFkyQtU",
    authDomain: "homeworkhelper-ca538.firebaseapp.com",
    databaseURL: "https://homeworkhelper-ca538-default-rtdb.firebaseio.com",
    projectId: "homeworkhelper-ca538",
    storageBucket: "homeworkhelper-ca538.appspot.com",
    messagingSenderId: "443156073129",
    appId: "1:443156073129:web:4d9950c696612cbfa7b7b8",
    measurementId: "G-F0C25E0ED1"
  };

firebase.initializeApp(firebaseConfig);

username = document.getElementById("login").value;
password = document.getElementById("password").value;

function addUser(){ firebase.database().ref("/users").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  console.log(childKey, childData)
} });  }); }