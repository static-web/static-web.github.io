
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAqe5SIrhCSgZBCXT875dTtL3-HRgqs3Sk",
    authDomain: "staticweb-7cc98.firebaseapp.com",
    databaseURL: "https://staticweb-7cc98.firebaseio.com",
    projectId: "staticweb-7cc98",
    storageBucket: "staticweb-7cc98.appspot.com",
    messagingSenderId: "683976001669",
    appId: "1:683976001669:web:20f5494cc848f0bc7381ec",
    measurementId: "G-WTGC6K2KEN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const dbRef = firebase.database().ref();
  const usersRef = dbRef.child('users');

  const userListUI = document.getElementById("userList");
usersRef.on("child_added", snap => {
  let user = snap.val();
  console.log(user);
  let $li = document.createElement("li");
  $li.innerHTML = user.name;
  $li.setAttribute("child-key", snap.key);

 $li.addEventListener("click", userClicked);
 userListUI.append($li);
});
//usersRef.on('value', function(snapshot) {
  //console.log(snapshot.val());
//});
function userClicked(e) {
    var userID = e.target.getAttribute("child-key");
    const userRef = dbRef.child('users/' + userID);
    const userDetailUI = document.getElementById("userDetail");
    userDetailUI.innerHTML = ""
    userRef.on("child_added", snap => {
        var $p = document.createElement("p");
        $p.innerHTML = snap.key + " - " + snap.val();
        userDetailUI.append($p);
    });
}
