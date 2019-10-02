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

// setup materialize components for modals:
document.addEventListener('DOMContentLoaded', function() {

  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});















































































































































































// create search var
var search = "chicken"
var queryUrl = "https://api.edamam.com/search?q=" + search + "&app_id=$42a05216&app_key=$ddaf66796324f3322e79ef209fccf704"

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
