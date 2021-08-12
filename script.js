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

    console.log('text:', textValue);
    console.log('time:', timeBlock);

    localStorage.setItem(timeBlock, textValue);
});

let hour9 = localStorage.getItem("9");
$("#9 .description").val(hour9);

let hour10 = localStorage.getItem("10");
$("#10 .description").val(hour10);

let hour11 = localStorage.getItem("11");
$("#11 .description").val(hour11);
  
let hour12 = localStorage.getItem("12");
$("#12 .description").val(hour12);
  
let hour13 = localStorage.getItem("13");
$("#13 .description").val(hour13);
  
let hour14 = localStorage.getItem("14");
$("#14 .description").val(hour14);
  
let hour15 = localStorage.getItem("15");
$("#15 .description").val(hour15);
  
let hour16 = localStorage.getItem("16");
$("#16 .description").val(hour16);
  
let hour17 = localStorage.getItem("17");
$("#17 .description").val(hour17);