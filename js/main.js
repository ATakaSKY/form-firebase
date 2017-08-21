// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
            apiKey: "AIzaSyDVWATbvCRXMYXXDkGT01eD7C7G_k10DUg",
            authDomain: "form-firebase-3635d.firebaseapp.com",
            databaseURL: "https://form-firebase-3635d.firebaseio.com",
            projectId: "form-firebase-3635d",
            storageBucket: "form-firebase-3635d.appspot.com",
            messagingSenderId: "948037215899"
        };
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}