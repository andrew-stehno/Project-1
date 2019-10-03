// Fire base configuration:
var firebaseConfig = {
  apiKey: "AIzaSyCGpN3WVXZki6csqb5r623irkpchpGjs2w",
  authDomain: "train-time-bf7b5.firebaseapp.com",
  databaseURL: "https://train-time-bf7b5.firebaseio.com",
  projectId: "train-time-bf7b5",
  storageBucket: "",
  messagingSenderId: "1025189797521",
  appId: "1:1025189797521:web:6203b58d192e1742ed6930"
};
// Initialize Firebase:
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

// Signup users:
const signUpForm = document.querySelector('#signup-form');
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info:
  const email = signUpForm['signup-email'].value;
  const password = signUpForm['signup-password'].value;

  // Sign up user:
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred);

    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signUpForm.reset();
  })
})

// Log user out:
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("user has signed out");
  })
});

// log user in:
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info:
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred);
    const modal = document.querySelector('#modal-login')
    M.Modal.getInstance(modal).close();
    signUpForm.reset();
  })
});




// Setup materialize components for modals:
document.addEventListener('DOMContentLoaded', function () {

  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});

























































































































































































// Document.ready
$(document).ready(function(){
  $('select').formSelect();
});




// create search var

$(document).on("click", ".keywordSearch", function(){
var search = $('.keyWord').val().trim();
var queryUrl = "https://api.edamam.com/search?q=" + search + "&app_id=$42a05216&app_key=$ddaf66796324f3322e79ef209fccf704"
  console.log("clicked");
  console.log(search);


  // reset search bar 
  $(".keyWord").val("");
})



//$.ajax({
  //  url: queryUrl,
   // method: "GET"
//}).then(function(response){
  //  console.log(response);
//});


// API Key
// https: //api.edamam.com/search?q=chicken?
//     // ddaf66796324f3322e79ef209fccf704

// Example API Search URL
// "https://api.edamam.com/search?q=chicken&app_id=${42a05216}&app_key=${ddaf66796324f3322e79ef209fccf704}&from=0&to=1&calories=591-722&health=alcohol-free"
