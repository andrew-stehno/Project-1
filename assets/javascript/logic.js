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




$.ajax({
   url: queryUrl,
   method: "GET"
}).then(function(response){
   console.log(response);

  //  response variable:
const data = response.hits;

// Iterate through ingredients:
// ***Need click function associated with recipe index to
// ***assign #1-10 for data[x] below.  Assigned as 1 for testing.
  for (let j = 0; j < data[1].recipe.ingredients.length; j++) {
    let ingrd = data[1].recipe.ingredients[j].food;
    console.log(ingrd);
  }


});

});
// API Key
// https: //api.edamam.com/search?q=chicken?
//     // ddaf66796324f3322e79ef209fccf704

// Example API Search URL
// "https://api.edamam.com/search?q=chicken&app_id=${42a05216}&app_key=${ddaf66796324f3322e79ef209fccf704}&from=0&to=1&calories=591-722&health=alcohol-free"
