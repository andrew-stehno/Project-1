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




// create search var

$(document).on("click", ".keywordSearch", function(){
var search = $('.keyWord').val().trim();
var queryUrl = "https://api.edamam.com/search?q=" + search + "&app_id=$42a05216&app_key=$ddaf66796324f3322e79ef209fccf704"
  console.log("clicked");
  console.log(search);


  // reset search bar 
  $(".keyWord").val("");
});



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
