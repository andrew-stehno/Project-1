// Setup materialize components for modals:
document.addEventListener('DOMContentLoaded', function () {

  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});

























































































































































































// Document.ready
$(document).ready(function(){
  $('select').formSelect();
  $('.carousel').carousel();
  $('.sidenav').sidenav();
});

// makinf Array to hold dropdown menu items and looping through to dynamically create the options. 
var optionsArr = ["Balanced", "Gluten-free", "Vegetarian", "Keto", "Paleo", "Vegan", "Pescetarian", "Dairy-free"]

for (let i = 0; i < optionsArr.length; i++) {
  // test loop
  console.log(optionsArr[i]);
  // var that holds new options
  var newOpt = $('<option>')

  newOpt.text(optionsArr[i]);

  $('.optionsField').append(newOpt);

};


// create search var

$(document).on("click", ".keywordSearch", function(){
var search = $('.keyWord').val().trim();
var dietParam = $('.dietParamSelector').val();
var queryUrl = "https://api.edamam.com/search?q=" + search + "&health=" + dietParam + "&app_id=$42a05216&app_key=$ddaf66796324f3322e79ef209fccf704&from=0&to=10"
  console.log("clicked");
  console.log(search);
  console.log(dietParam);


  // reset search bar 
  $(".keyWord").val("");




$.ajax({
   url: queryUrl,
   method: "GET"
}).then(function(response){
   console.log(response);
});
});

// API Key
// https: //api.edamam.com/search?q=chicken?
//     // ddaf66796324f3322e79ef209fccf704

// Example API Search URL
// "https://api.edamam.com/search?q=chicken&app_id=${42a05216}&app_key=${ddaf66796324f3322e79ef209fccf704}&from=0&to=1&calories=591-722&health=alcohol-free"
