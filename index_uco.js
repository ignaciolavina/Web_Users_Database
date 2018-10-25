//own js file

  var name = document.getElementById("Name");
  var email = document.getElementById("Phone");
  var phone = document.getElementById("Adress");

  var submitBtn = document.getElementById(submitBtn);

  function submitClick(){

    var vn = name.value;

    window.alert("works");

    var firebaseref = firebase.database().ref();
    firebaseref.child("uk5").set(vn);
  }