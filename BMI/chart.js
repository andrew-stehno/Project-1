var graphRef = firebase.database().ref();
// console.log(graphRef)

var chartDate = [];
var chartBMI = [];
var chartBFP = [];

graphRef.on("value", function (childSnapshot) {

    Object.keys(childSnapshot.val()).forEach(element => {
        chartDate.push(childSnapshot.val()[element].date_DB)
        chartBMI.push(childSnapshot.val()[element].BMI_DB)
        chartBFP.push(childSnapshot.val()[element].BFP_DB)
    });

})

console.log('chartDate', chartDate)
console.log('chartBMI', chartBMI)
console.log('chartBFP', chartBFP)
setTimeout(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: chartDate,
            datasets: [{
                label: 'Body Mass Index',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: chartBMI
            }, {
                label: 'Body Fat Porcent',
                // backgroundColor: 'rgb(50, 99, 80)',
                borderColor: 'rgb(50, 99, 132)',
                data: chartBFP
            }]
        },
        // Configuration options go here
        options: {}
    });
}, 3000);





