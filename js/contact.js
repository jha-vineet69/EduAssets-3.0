//---------Contact Form -----------//

var messagesRef = firebase
  .database()
  .ref()
  .child("messages");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  // Get Values
  var name = getInputVal("name");
  var phone = getInputVal("phone");
  var email = getInputVal("email");
  var message = getInputVal("message");

  saveMessage(name, email, phone, message);
  document.getElementById("contactForm").reset();
}
function getInputVal(id) {
  return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}

function applicationpost() {
  window.alert("Mail your resume at support@eduassets.co.in");
}
