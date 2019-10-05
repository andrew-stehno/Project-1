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
var optionsArr = ["balanced", "high-fiber", "high-protein", "low-carb", "low-fat", "low-sodium"]

for (let i = 0; i < optionsArr.length; i++) {
  // test loop
  // console.log(optionsArr[i]);
  // var that holds new options
  var newOpt = $('<option>')

  newOpt.text(optionsArr[i]);

  $('.optionsField').append(newOpt);

};


// create search var

$(document).on("click", ".keywordSearch", function () {
  var search = $('.keyWord').val().trim();
  var dietParam = $('.dietParamSelector').val();
  var queryUrl = "https://api.edamam.com/search?q=" + search + "&app_id=$42a05216&app_key=$ddaf66796324f3322e79ef209fccf704&from=0&to=12"
  console.log("clicked");
  console.log(search);
  console.log(dietParam);
  if (dietParam !== null) {
    queryUrl = "https://api.edamam.com/search?q=" + search + "&diet=" + dietParam + "&app_id=$42a05216&app_key=$ddaf66796324f3322e79ef209fccf704&from=0&to=12"
  }
  console.log(queryUrl);
  // reset search bar 
  $(".keyWord").val("");






  // ajax Call
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    //  response variable:
    const data = response.hits;
    console.log(data)
    // Iterate through ingredients:
    // ***Need click function associated with recipe index to
    // ***assign #1-10 for data[x] below.  Assigned as 1 for testing.
    for (let j = 0; j < data[j].recipe.ingredients.length; j++) {
      let ingrd = data[j].recipe.ingredients[j].food;
      console.log(ingrd);

      // Shopping List to DOM ***ingredients need a permament home on the DOM***
      let newList = $('<li>').addClass('listItems');
      let label = $('<label>');
      let newInput =$('<input>').attr('type', 'checkbox');
      let span = $('<span>').text(ingrd);
      // console.log(newInput,"newinput");
      newList.append(label);
      label.append(newInput);
      label.append(span);
      // console.log(newList,"newlist");
      // $('.ingredients').append(newList);
      // div.append(newList);
      

      

      // Click listener to send data to Firebase:
      $('#ingrd-btn').on('click', function (event) {
        event.preventDefault();

        // let ingredientList = $('.listItems').val();
        // console.log(ingredientList);

        // Store API data in object:
        let newData = {
          ingredients: ingrd
        }

        // Upload data to Firebase database:
        database.ref().set(newData);
      })

    }

    // console.log(data[1].recipe.image)
    // Iterate through ingredients:
    // ***Need click function associated with recipe index to
    // ***assign #1-10 for data[x] below.  Assigned as 1 for testing.
    for (let j = 0; j < data[j].recipe.ingredients.length; j++) {
      // let ingrd = data[1].recipe.ingredients[j].food;
      let url = data[j].recipe.url
      // console.log(url);
    }
    // Function to render cards, placed in ajax call for scoping. 
    function renderCards() {
      for (var i = 0; i < data.length; i++) {
        var recipeURL = data[i].recipe.url
        // console.log(recipeURL);
        var div = $('<div>').addClass('card');
        var title = $('<div>').addClass('card-title');
        // append .card-content to .card
        var newDiv = $('<div>').addClass('card-content');
        // append img to card-content
        var img = $('<img src=" ' + data[i].recipe.image + ' " alt="Food Image">');
        var cardLinkDiv = $('<div>').addClass('card-action')
        var cardLink = $('<a>').attr({'href':recipeURL, target: '=_blank'}).text("Recipe");
        // var ingUl = $('<ul class="ing">');
        // var ingList = $('<li class="ingList">').text(ingrd)
        var content = $('<p>').text(data[i].recipe.label);
        for (let j = 0; j < data[i].recipe.ingredients.length; j++) {
          console.log(data[i].recipe.ingredients[j].food);
          
          var ingrdContent = $('<p>').text(data[i].recipe.ingredients[j].food);
          newDiv.append(ingrdContent);
        }
        cardLinkDiv.append(cardLink)
        title.append(content)
        div.append(img)
        div.append(title)
        div.append(newDiv)
        div.append(cardLinkDiv)
        // div.append(newList)
        // ingUl.append(ingList)
        // newDiv.append(ingUl)
        $('.cardArea').prepend(div);

      }
    }

    renderCards();
  });
});


// API Key
// https: //api.edamam.com/search?q=chicken?
//     // ddaf66796324f3322e79ef209fccf704

// Example API Search URL
// "https://api.edamam.com/search?q=chicken&app_id=${42a05216}&app_key=${ddaf66796324f3322e79ef209fccf704}&from=0&to=1&calories=591-722&health=alcohol-free"
// + "&health=" + dietParam