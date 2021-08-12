let today = moment().format('dddd, MMMM Do');
let currentTime = moment().hours();
let timeIds = $(".row");
let localData = JSON.parse(localStorage.getItem("planner-storage"));
let plannerText = [];

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
if (localData !== null) {
    plannerText = localData;
}

$(".saveBtn").on("click", function() {
    let hourID = $(this).closest(".time-block").attr("id");
    let hourInput = $(this).closest(".description").val();

    let inputText = {"id-hour": hourID, "id-input": hourInput};

    plannerText.push(inputText);
    localStorage.setItem("planner-storage", JSON.stringify(plannerText))
})
