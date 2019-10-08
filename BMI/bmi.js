
var dataRef = firebase.database();

// Capture Button Click
$("#submit-btn").on("click", function (event) {
    event.preventDefault();

    date = $("#date-input").val().trim();
    weight = $("#wight-input").val().trim();
    height = $("#height-input").val().trim();
    age = $("#age-input").val().trim();
    gender = $("input[type=radio][name=gender]:checked").val();


    heightInc = height * 12;

    var bmiC = (weight / Math.pow(heightInc, 2)) * 703;
    bmi = bmiC.toFixed(2);

    if (gender === "Female") {

        var bfpf = ((1.2 * bmi) + (0.23 * age)) - 5.4;
        bfp = bfpf.toFixed(2);

    } else {

        var bfpm = ((1.2 * bmi) + (0.23 * age)) - 16.2;
        bfp = bfpm.toFixed(2);
    }

    // Over or Under weight

    if (gender === "Female") {
        if (age <= 40) {
            if (bfp <= 21) {
                result = "Underfat";
            } else if (bfp <= 33) {
                result = "Healthy";
            } else if (bfp <= 39) {
                result = "Overweigh";
            } else {
                result = "Obese"
            }
        } else if (age <= 60) {
            if (bfp <= 23) {
                result = "Underfat";
            } else if (bfp <= 35) {
                result = "Healthy";
            } else if (bfp <= 40) {
                result = "Overweigh";
            } else {
                result = "Obese"
            }
        } else if (age <= 79) {
            if (bfp <= 24) {
                result = "Underfat";
            } else if (bfp <= 36) {
                result = "Healthy";
            } else if (bfp <= 42) {
                result = "Overweigh";
            } else {
                result = "Obese"
            }
        } else {
            if (age <= 40) {
                if (bfp <= 8) {
                    result = "Underfat";
                } else if (bfp <= 19) {
                    result = "Healthy";

                } else if (bfp <= 25) {
                    result = "Overweigh";
                } else {
                    result = "Obese"
                }
            } else if (age <= 60) {
                if (bfp <= 11) {
                    result = "Underfat";
                } else if (bfp <= 22) {
                    result = "Healthy";

                } else if (bfp <= 27) {
                    result = "Overweigh";
                } else {
                    result = "Obese"
                }
            } else if (age <= 79) {
                if (bfp <= 13) {
                    result = "Underfat";
                } else if (bfp <= 25) {
                    result = "Healthy";
                } else if (bfp <= 30) {
                    result = "Overweigh";
                } else {
                    result = "Obese"
                }
            }
        }
    }

    // Code for the push
    dataRef.ref().push({
        // database.ref().push({

        date_DB: date,
        weight_DB: weight,
        height_DB: height,
        age_DB: age,
        gender_DB: gender,
        BMI_DB: bmi,
        BFP_DB: bfp,
        result_DB: result,

    });

    // Clears all of the text-boxes
    $("#date-input").val("");
    $("#wight-input").val("");
    $("#height-input").val("");
    $("#age-input").val("");
    $("#gender-input").val("");
});

dataRef.ref().on("child_added", function (childSnapshot) {
    // database.ref().on("child_added", function (childSnapshot) {

    console.log(childSnapshot.val().date_DB);


    var newRow = $("<tr>").append(
        $("<th>").text(childSnapshot.val().date_DB),
        $("<th>").text(childSnapshot.val().weight_DB),
        $("<th>").text(childSnapshot.val().height_DB),
        $("<th>").text(childSnapshot.val().age_DB),
        $("<th>").text(childSnapshot.val().gender_DB),
        $("<th>").text(childSnapshot.val().BMI_DB),
        $("<th>").text(childSnapshot.val().BFP_DB),
        $("<th>").text(childSnapshot.val().result_DB),
    );
    // Append the new row to the table
    $("#bmi-table > tbody").append(newRow);
});

// Chart

// var chart_BMI = childSnapshot.val().BMI_DB
// console.log(childSnapshot.val().BMI_DB);
var chart_Date = ["a", "b", "c"]

function float2dollar(value) {
    return "U$ " + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function renderChart(chart_BMI, chart_Date) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chart_Date,
            datasets: [{
                label: 'BMI',
                data: chart_BMI,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function (value, index, values) {
                            return float2dollar(value);
                        }
                    }
                }]
            }
        },
    });
    $('#myChart').append(myChart);
}
renderChart();
console.log("chart" + myChart);
