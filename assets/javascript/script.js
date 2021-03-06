// html elements
var mainEl = $("#main");

var infoArr = [];

for (var i = 0; i < 9; ++i) {
    // create div element and set className
    var dayContainerEl = document.createElement("div");
    dayContainerEl.className = "dayContainer";

    // create hour cotainer and set className
    var hourCont = document.createElement("div");
    hourCont.className = "hoursCont";
    // create p tag element
    var hoursText = document.createElement("p");
    // set p tag element textContent to correct time using i
    if (i < 4) {
        hoursText.textContent = ((i + 9) + ":00 AM");
        if ((i + 9) === 12) {hoursText.textContent = ((i + 9) + ":00 PM");}
    }
    else {
        hoursText.textContent = ((i - 3) + ":00 PM");
    }
    // append p tag elements to hours container
    hourCont.append(hoursText);

    // create form element
    var form = document.createElement("form");

    // create input element and set className
    var input = document.createElement("input");
    input.className = "input";
    input.id = ("input" + i);

    // append input to form
    form.append(input);

    // create button element and set className
    var btn = document.createElement("button");
    btn.className = "btn";
    btn.id = ("btn"+i);

    // create an icon element using imported library and set className
    var icon = document.createElement("i");
    icon.className = "fa fa-check-square-o";
    // apend icong to buttons
    btn.append(icon);

    //append hours container, input element, and buttons to dayContainer element
    dayContainerEl.append(hourCont, form, btn);

    // append dayContainer element to main element
    mainEl.append(dayContainerEl);
} 

//loop through children of mainEl
for (var i = 0; i < mainEl[0].children.length; ++i) {
    // add event listeners for all buttons
    mainEl[0].children[i].children[2].addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Hello World!");
    });
}

// init function to get todays date
function init() {
    // create date variable ant set it to today's date
    var date = moment().format("dddd, " + "MMMM " + "Do");
    // use jquery to to set the text content of #todaysDate to date variable
    $("#todaysDate").text(date);  

    var getInfo = localStorage.getItem("savedInfo");
}

// call init
init();