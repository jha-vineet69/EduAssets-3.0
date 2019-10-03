//--------------Newsletter------------//
var nlemail = document.getElementById("form-control");
document
  .getElementById("newsletterForm")
  .addEventListener("submit", submitClick);

function submitClick(e) {
  e.preventDefault();
  //to stop refreshing
  var firebaseRef = firebase
    .database()
    .ref()
    .child("newsletter");
  var nl_email = nlemail.value;
  firebaseRef.push().set(nl_email);
  document.getElementById("newsletterForm").reset();
}
