
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

// // Initial Values
// var weight = 0;
// var height = 0;
// var age = 0;
// var gender = "";


// Capture Button Click
$("#submit-btn").on("click", function (event) {
    event.preventDefault();

    date = $("#date-input").val().trim();
    weight = $("#wight-input").val().trim();
    height = $("#height-input").val().trim();
    age = $("#age-input").val().trim();
    gender = $("input[type=radio][name=gender]:checked").val();


    console.log(date);
    console.log(height);
    console.log(age);
    console.log(gender);


    heightInc = height * 12;

    var bmiC = (weight / Math.pow(heightInc, 2)) * 703;
    bmi = bmiC.toFixed(2);

    // document.getElementById("demo").innerHTML = bmi;

    if (gender === "Female") {

        var bfpf = ((1.2 * bmi) + (0.23 * age)) - 5.4;
        bfp = bfpf.toFixed(2);

    } else {

        var bfpm = ((1.2 * bmi) + (0.23 * age)) - 16.2;
        bfp = bfpm.toFixed(2);
    }

    console.log(bmi);
    console.log(bfp);

    // Code for the push
    dataRef.ref().push({

        date_DB: date,
        weight_DB: weight,
        heigh_DB: height,
        age_DB: age,
        gender_DB: gender,
        BMI_DB: bmi,
        BFP_DB: bfp,

    });

    dataRef.ref().on("child_added", function (childSnapshot) {

        var newRow = $("<tr>").append(
            $("<td>").text(childSnapshot.val().date),
            $("<td>").text(childSnapshot.val().weight),
            $("<td>").text(childSnapshot.val().hight),
            $("<td>").text(childSnapshot.val().age),
            $("<td>").text(childSnapshot.val().gender),
            $("<td>").text(childSnapshot.val().bmi),
            $("<td>").text(childSnapshot.val().bfp),
        );
        // Append the new row to the table
        $("#bmi-table > tbody").append(newRow);
    });

    // Clears all of the text-boxes
    $("#date-input").val("");
    $("#wight-input").val("");
    $("#height-input").val("");
    $("#age-input").val("");
    $("#gender-input").val("");

});
