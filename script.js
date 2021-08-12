let today = moment().format('dddd, MMMM Do');
let currentTime = moment().hours();
let timeIds = $(".row");
let plannerText = [];

let storePlans = JSON.parse(localStorage.getItem("planner-storage"));

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


$(".saveBtn").on("click", function() {

    let textValue = $(this).siblings(".description").val();
    let timeBlock = $(this).parent().attr("id");

    console.log('time:', timeBlock);
    console.log('text:', textValue);

    localStorage.setItem(timeBlock, textValue);
});

let text9 = localStorage.getItem("9");
$("#9 .description").val(text9);
let text10 = localStorage.getItem("10");
$("#10 .description").val(text10);
let text11 = localStorage.getItem("11");
$("#11 .description").val(text11);
let text12 = localStorage.getItem("12");
$("#12 .description").val(text12);
let text13 = localStorage.getItem("13");
$("#13 .description").val(text13);
let text14 = localStorage.getItem("14");
$("#14 .description").val(text14);
let text15 = localStorage.getItem("15");
$("#15 .description").val(text15);
let text16 = localStorage.getItem("16");
$("#16 .description").val(text16);
let text17 = localStorage.getItem("17");
$("#17 .description").val(text17);