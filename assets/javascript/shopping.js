// Setup materialize components for modals:
document.addEventListener('DOMContentLoaded', function () {

  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});

// Document.ready
$(document).ready(function () {
  $('.sidenav').sidenav();
});


// Firebase listener:
database.ref(uid).on("child_added", function (childSnapshot) {
  console.log(uid);
  console.log(childSnapshot.val());
  console.log(childSnapshot.val().recipes);
  console.log(childSnapshot.val().ingredients);

  // Listen for auth status change:
  auth.onAuthStateChanged(user => {
    if (user) {
      userAuth();
    } else {
      nonUser();
    }
      //If errors occur:
  }, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
})


function userAuth() {
  // Post recipes to favorites:
  let newRowFav = $("<tr>");
  let newRowFav1 = $('<td>');
  let newRowFav2 = $('<a>').attr({ href: (childSnapshot.val().recipes), target: "_blank" }).text(childSnapshot.val().recipes);
  newRowFav1.append(newRowFav2);
  newRowFav.append(newRowFav1);
  $("#fav-table > tbody").append(newRowFav);

  // Post ingredients to shopping list:
  let newList = $('<li>').addClass('listItems');
  let label = $('<label>');
  let newInput = $('<input>').attr({type: 'checkbox', id: 'user-fav'});
  let span = $('<span>').text(childSnapshot.val().ingredients);
  console.log(newInput, "newinput");
  newList.append(label);
  label.append(newInput);
  label.append(span);
  console.log(newList, "newlist");
  $("#list-table").append(newList);

};

function nonUser() {
  let nonUserDiv = $('<div>').addClass("col s12 center-align deep-orange").attr("id", "logged").text("You must be logged in to save recipes and create shopping lists");
  $('#non-user').append(nonUserDiv);
};
});
