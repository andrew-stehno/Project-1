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
  $('.parallax').parallax();
});
var autoplay = true;
setInterval(function () {
  if (autoplay) $('.carousel').carousel('next');
}, 4500);
$('.carousel').hover(function () {
  autoplay = false;
}, function () {
  autoplay = true;
});



// making Array to hold dropdown menu items and looping through to dynamically create the options. 
var optionsArr = ["balanced", "high-fiber", "high-protein", "low-carb", "low-fat", "low-sodium"]

for (let i = 0; i < optionsArr.length; i++) {
  // test loop
  // console.log(optionsArr[i]);
  // var that holds new options
  var newOpt = $('<option>')

  newOpt.text(optionsArr[i]);

  $('.optionsField').append(newOpt);

};

var instance = $('select').formSelect();


$(document).on("click", ".keywordSearch", function () {
  event.preventDefault();
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
  var selectField = document.querySelector('select')
  resetSelectElement(selectField)

  // ajax Call
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    //  response variable:
    const data = response.hits;
    let ingrdArray = [];
    let recipeArray = [];
    let newData;

    // Loop through API data for ingredients:
    for (let j = 0; j < data[j].recipe.ingredients.length; j++) {
      let ingrd = data[j].recipe.ingredients[j].food;
      ingrdArray.push(data[j].recipe.ingredients[j].food);
      recipeArray.push(data[j].recipe.url);
      //  console.log(ingrd);
      // console.log(recipeArray);
    }

    // Loop through API data for ingredients:
    for (let j = 0; j < data[j].recipe.ingredients.length; j++) {
      // let ingrd = data[1].recipe.ingredients[j].food;
      let url = data[j].recipe.url
      // console.log(url);
    }
    // Function to render cards, placed in ajax call for scoping. 
    function renderCards() {
      for (var i = 0; i < data.length; i++) {
          var recipeURL = data[i].recipe.url;
          var ingrdLIST = JSON.stringify(data[i].recipe.ingredients.map(ingred => ingred.food));
          console.log(ingrdLIST);
          // console.log(recipeURL);
          var col = $('<div>').addClass('col m6 s12');
          var div = $('<div>').addClass('card sticky-action');
          var reveal = $('<div>').addClass('card-reveal');
          var icon = $('<a class="btn-floating waves-effect waves-light red favorites"><i class="material-icons">favorite</i></a>')
          icon.attr("data-link", recipeURL,);
          var icon2 = $('<a class="btn-floating waves-effect waves-light red save-list right"><i class="material-icons">local_dining</i></a>')
          icon2.attr("data-link", ingrdLIST);
          // var icon = $('<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">bookmark</i></a>')
          var title = $('<span>').addClass('card-title activator grey-text text-darken-4').text(data[i].recipe.label);
          var secondTitle = $('<span>').addClass('card-title grey-text text-darken-4');
          var closeout = $('<i>').addClass('material-icons right').text('close')
          var image = $('<div>').addClass('card-image waves-effect waves-block waves-light');
          // append .card-content to .card
          var newDiv = $('<div>').addClass('card-content');
          // append img to card-content
          var img = $('<img src=" ' + data[i].recipe.image + ' " alt="Food Image">').addClass('activator');
          var cardLinkDiv = $('<div>').addClass('card-action')
          var cardLink = $('<a>').attr({
            'href': recipeURL,
            target: '=_blank'
          }).text("Recipe");
          var heading = $('<p>').text("Ingredients: ");
          // var content = $('<p>').text(data[i].recipe.label);
          for (let j = 0; j < data[i].recipe.ingredients.length; j++) {
            // console.log(data[i].recipe.ingredients[j].food);

            recipeArray = [data[i].recipe.url];
            var ingrdContent = $('<p>').text(data[i].recipe.ingredients[j].food);
            reveal.append(ingrdContent);
          }
          cardLinkDiv.append(cardLink)
          cardLinkDiv.append(icon)
          cardLinkDiv.append(icon2)
          // title.append(content)
          image.append(img)
          // image.append(icon)
          div.append(image)
          secondTitle.prepend(closeout);
          newDiv.append(title)
          reveal.prepend(secondTitle);
          div.append(newDiv)
          div.append(cardLinkDiv)
          div.append(reveal)
          col.append(div)
          // div.append(newList)
          reveal.prepend(heading)
          // newDiv.prepend("Ingredients: ")
          $('.cardArea').prepend(col);
        }
      $('select').formSelect();

      // Click listener to send data to Firebase:s
      let recipeUrl = [];
      $('.favorites').on('click', function (event) {
        event.preventDefault();

        // Store API data in object:
        recipeUrl.push($(this).attr('data-link'));
        console.log(recipeUrl);
        newData = {
          // ingredients: ingrdArray,

          recipes: recipeUrl,

        }

        // Upload data to Firebase database:
        database.ref(uid).update(newData);

      });

    
      
      let ingrdList = [];
      // Click listener to send data to Firebase:s
      $('.save-list').on('click', function (event) {
        event.preventDefault();
        let newIngredients = JSON.parse($(this).attr('data-link'));

        // Store API data in object:
        ingrdList.push($(this).attr('data-link'));
        console.log(ingrdList)
        newData = {
          ingredients: ingrdList,

        }

        // Upload data to Firebase database:
        database.ref(uid).update(newData);

      })



    }

    renderCards();
  });
});

function resetSelectElement(selectElement) {
  selectElement.selectedIndex = 0;
}
