let today = moment().format('dddd, MMMM Do');
let currentTime = moment().hours();
let timeIds = $(".row");

$("#currentDay").text(today);

for (var i = 0 ; i < timeIds.length ; i++) {
    var elementID = timeIds[i].id;

    var changedID = document.getElementById(timeIds[i].id)

    if (elementID > currentTime) {
        $(changedID).addClass("future");
    } else if (elementID < currentTime) {
        $(changedID).addClass("past");
    } else {
        $(changedID).addClass("present");
    }
}