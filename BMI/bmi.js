
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCzDnBGcozOuVnT3J4RP4ckgXhG0hzHYu0",
    authDomain: "bodymassc.firebaseapp.com",
    databaseURL: "https://bodymassc.firebaseio.com",
    projectId: "bodymassc",
    storageBucket: "",
    messagingSenderId: "296683188310",
    appId: "1:296683188310:web:2432a2e488b7ef885e8bf7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var dataRef = firebase.database();


// Initial Values
var weight = 0;
var height = 0;
var age = 0;
var gender = "";


// Capture Button Click
$("#submit-btn").on("click", function (event) {
    event.preventDefault();

    weight = $("#wight-input").val().trim();
    height = $("#height-input").val().trim();
    age = $("#age-input").val().trim();
    gender = $("#gender_input[value]").val();
    console.log(gender);

    heightInc = height * 12;

    var bmi = (weight / Math.pow(heightInc, 2)) * 703;
    var bmit = bmi.toFixed(2);

    // document.getElementById("demo").innerHTML = bmi;

    if (gender === "femail") {

        var bfpf = ((1.2 * bmi) + (0.23 * age)) - 5.4;
        var bfpft = bfpf.toFixed(2);
        bmi_db = bfpft

    } else {

        var bfpm = ((1.2 * bmi) + (0.23 * age)) - 16.2;
        var bfpmt = bfpm.toFixed(2);
        bmi_db = bfpmt

    }

    // // Code for the push
    // dataRef.ref().push({

    //     weight_DB: weight,
    //     heigh_DB: height,
    //     age_DB: age,
    //     genger_DB: gender,
    //     BMI_DB: bmit,
    //     BFP_DB: bmi_db,

});

dataRef.ref().on("child_added", function (childSnapshot) {

    // console.log(childSnapshot.val().weight);
});

// });

// Clears all of the text-boxes
$("#wight-input").val("");
$("#height-input").val("");
$("#age-input").val("");
$("#gender-input").val("");
