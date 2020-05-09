
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDkBvOe9E46o8-w1bIO5KC2w67l4cUg0oM",
    authDomain: "webapp-3194e.firebaseapp.com",
    databaseURL: "https://webapp-3194e.firebaseio.com",
    projectId: "webapp-3194e",
    storageBucket: "webapp-3194e.appspot.com",
    messagingSenderId: "971582520833",
    appId: "1:971582520833:web:421b3633075033ede20a00",
    measurementId: "G-5LELQX129P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const dbRef = firebase.database().ref();
  const usersRef = dbRef.child('users');

  const userListUI = document.getElementById("userList");
usersRef.on("child_added", snap => {
    let user = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = user.name;
    $li.setAttribute("child-key", snap.key);
    $li.addEventListener("click", userClicked).userListUI.append($li);
});

function userClicked(e) {
    var userID = e.target.getAttribute("child-key");
    const userRef = dbRef.child('users/' + userID);
    const userDetailUI = document.getElementById("userDetail");
    userDetailUI.innerHTML = ""
    userRef.on("child_added", snap => {
        var $p = document.createElement("p");
        $p.innerHTML = snap.key + " - " + snap.val().userDetailUI.append($p);
    });
}
