// Setup materialize components for modals:
document.addEventListener('DOMContentLoaded', function () {

  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});

























































































































































































// Document.ready
$(document).ready(function () {
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

$(document).on("click", ".keywordSearch", function () {
  var search = $('.keyWord').val().trim();
<<<<<<< HEAD
  var queryUrl = "https://api.edamam.com/search?q=" + search + "&app_id=$42a05216&app_key=$ddaf66796324f3322e79ef209fccf704"
=======
  var dietParam = $('.dietParamSelector').val();
  var queryUrl = "https://api.edamam.com/search?q=" + search + "&app_id=$42a05216&app_key=$ddaf66796324f3322e79ef209fccf704&from=0&to=12"
>>>>>>> development
  console.log("clicked");
  console.log(search);
  console.log(dietParam);


  // reset search bar 
  $(".keyWord").val("");



<<<<<<< HEAD

=======
  // ajax Call
>>>>>>> development
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    //  response variable:
    const data = response.hits;
<<<<<<< HEAD

    // Iterate through ingredients:
    // ***Need click function associated with recipe index to
    // ***assign #1-10 for data[x] below.  Assigned as 1 for testing.
    for (let j = 0; j < data[1].recipe.ingredients.length; j++) {
      let ingrd = data[1].recipe.ingredients[j].food;





































































      
      let recipes;

      // Click listener to display ingredients to DOM:
      // $('.keyWordSearch').on(click, function (event) {

      // })

      // Click listener to send data to Firebase:
      $('#ingrd-btn').on('click', function (event) {
        event.preventDefault();

        // Store API data in object:
        let newData = {
          ingredients: [ingrd]
        }

        // Upload data to Firebase database:
        database.ref().set(newData);
      })
    }
    // let form = $('<form>');
    // let label = $('<label>');
    // let input = $('<input>').attr('type', 'checkbox').text(ingrd);
    // label.append$(input);
    // form.append$(label);

  });
=======
    // console.log(data[1].recipe.image)
    // Iterate through ingredients:
    // ***Need click function associated with recipe index to
    // ***assign #1-10 for data[x] below.  Assigned as 1 for testing.
    for (let j = 0; j < data[j].recipe.ingredients.length; j++) {
      // let ingrd = data[1].recipe.ingredients[j].food;
      let url = data[j].recipe.url
      console.log(url);
    }
    // Function to render cards, placed in ajax call for scoping. 
    function renderCards() {
      for (var i = 0; i < data.length; i++) {
        var recipeURL = data[i].recipe.url
        console.log(recipeURL);
        var div = $('<div>').addClass('card');
        var title = $('<div>').addClass('card-title');
        // append .card-content to .card
        var newDiv = $('<div>').addClass('card-content');
        // append img to card-content
        var img = $('<img src=" ' + data[i].recipe.image + ' " alt="Food Image">');
        var tabs = $('<div>').addClass('card-tabs')
        var tabsUl = $('<ul class="tabs tabs-fixed-width">');
        var tabsList = $('<li class="tab">').add('<a>').attr('href', "google.com").text("hello")
        var content = $('<p>').text(data[i].recipe.label);
        
        
        tabsUl.append(tabsList)
        newDiv.append(tabsUl)
        title.append(content)
        div.append(img)
        div.append(title)
        div.append(newDiv)

        $('.cardArea').prepend(div);

      }
    }

    renderCards();
  });
});
>>>>>>> development


// API Key
// https: //api.edamam.com/search?q=chicken?
//     // ddaf66796324f3322e79ef209fccf704

// Example API Search URL
// "https://api.edamam.com/search?q=chicken&app_id=${42a05216}&app_key=${ddaf66796324f3322e79ef209fccf704}&from=0&to=1&calories=591-722&health=alcohol-free"
// + "&health=" + dietParam