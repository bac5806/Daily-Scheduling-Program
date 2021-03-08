// html element
var mainEl = $("#main");
var clearButtonEl = document.querySelector("#clearButton");

// boolean flags for hour block background colors
var isBeforeCurrentTime = true;
var isAfterCurrentTime = false;

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
    var workHours;
    if (i < 4) {
        workHours = i + 9;
        hoursText.textContent = workHours + ":00 AM";
        if ((i + 9) === 12) {
            hoursText.textContent = workHours + ":00 PM";
        }
    }
    else {
        workHours = i - 3;
        hoursText.textContent = workHours + ":00 PM";
    }

    // get current hour
    var getTime = moment().format("h");;

    // set current hour to red
    if (workHours == getTime) {
        isBeforeCurrentTime = false;
        isAfterCurrentTime = true;
        dayContainerEl.style.backgroundColor = "red";
    }
    // set time brefore current hour to grey
    else if (isBeforeCurrentTime) {
        dayContainerEl.style.backgroundColor = "grey";
    }
    // set time past current hour to green 
    else if (isAfterCurrentTime) {
        dayContainerEl.style.backgroundColor = "green";
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


// 9AM button
mainEl[0].children[0].children[2].addEventListener("click", function(event) {
    event.preventDefault();
    // get message 
    var getInput = mainEl[0].children[0].children[1].children[0].value;
    
    // if an item already exists, remove it before stroing new item
    if (JSON.parse(localStorage.getItem("nineAm")) !== null) {
        localStorage.removeItem("nineAm");
    }
    localStorage.setItem("nineAm", JSON.stringify(getInput));
});

// 10AM button
mainEl[0].children[1].children[2].addEventListener("click", function(event) {
    event.preventDefault();
    // get message 
    var getInput = mainEl[0].children[1].children[1].children[0].value;
    
    // if an item already exists, remove it before stroing new item
    if (JSON.parse(localStorage.getItem("tenAm")) !== null) {
        localStorage.removeItem("tenAm");
    }
    localStorage.setItem("tenAm", JSON.stringify(getInput));
});

// 11AM button
mainEl[0].children[2].children[2].addEventListener("click", function(event) {
    event.preventDefault();
    // get message
    var getInput = mainEl[0].children[2].children[1].children[0].value;
    
    // if an item already exists, remove it before stroing new item
    if (JSON.parse(localStorage.getItem("elevenAm")) !== null) {
        localStorage.removeItem("elevenAm");
    }
    localStorage.setItem("elevenAm", JSON.stringify(getInput));
});

// 12PM button
mainEl[0].children[3].children[2].addEventListener("click", function(event) {
    event.preventDefault();
    // get message 
    var getInput = mainEl[0].children[3].children[1].children[0].value;
    
    // if an item already exists, remove it before stroing new item
    if (JSON.parse(localStorage.getItem("twelvePm")) !== null) {
        localStorage.removeItem("twelvePm");
    }
    localStorage.setItem("twelvePm", JSON.stringify(getInput));
});


// 1PM button
mainEl[0].children[4].children[2].addEventListener("click", function(event) {
    event.preventDefault();
    // get message 
    var getInput = mainEl[0].children[4].children[1].children[0].value;
    
    // if an item already exists, remove it before stroing new item
    if (JSON.parse(localStorage.getItem("onePm")) !== null) {
        localStorage.removeItem("onePm");
    }
    localStorage.setItem("onePm", JSON.stringify(getInput));
});

// 2PM button
mainEl[0].children[5].children[2].addEventListener("click", function(event) {
    event.preventDefault();
    // get message
    var getInput = mainEl[0].children[5].children[1].children[0].value;
    
    // if an item already exists, remove it before stroing new item
    if (JSON.parse(localStorage.getItem("twoPm")) !== null) {
        localStorage.removeItem("twoPm");
    }
    localStorage.setItem("twoPm", JSON.stringify(getInput));
});

// 3PM button
mainEl[0].children[6].children[2].addEventListener("click", function(event) {
    event.preventDefault();
    // get message 
    var getInput = mainEl[0].children[6].children[1].children[0].value;
    
    // if an item already exists, remove it before stroing new item
    if (JSON.parse(localStorage.getItem("threePm")) !== null) {
        localStorage.removeItem("threePm");
    }
    localStorage.setItem("threePm", JSON.stringify(getInput));
});

// 4PM button
mainEl[0].children[7].children[2].addEventListener("click", function(event) {
    event.preventDefault();
    // get message
    var getInput = mainEl[0].children[7].children[1].children[0].value;
    
    // if an item already exists, remove it before stroing new item
    if (JSON.parse(localStorage.getItem("fourPm")) !== null) {
        localStorage.removeItem("fourPm");
    }
    localStorage.setItem("fourPm", JSON.stringify(getInput));
});

// 5PM button
mainEl[0].children[8].children[2].addEventListener("click", function(event) {
    event.preventDefault();
    // get message 
    var getInput = mainEl[0].children[7].children[1].children[0].value;
    
    // if an item already exists, remove it before stroing new item
    if (JSON.parse(localStorage.getItem("fivePm")) !== null) {
        localStorage.removeItem("fivePm");
    }
    localStorage.setItem("fivePm", JSON.stringify(getInput));
});

// button to clear all messages and reload page
clearButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.removeItem("nineAm");
    localStorage.removeItem("tenAm");
    localStorage.removeItem("elevenAm");
    localStorage.removeItem("twelvePm");
    localStorage.removeItem("onePm");
    localStorage.removeItem("twoPm");
    localStorage.removeItem("threePm");
    localStorage.removeItem("fourPm");
    localStorage.removeItem("fivePm");

    location.reload();
});


// init function to get todays date and stored messages
function init() {
    // create date variable ant set it to today's date
    var date = moment().format("dddd, " + "MMMM " + "Do");
    // use jquery to to set the text content of #todaysDate to date variable
    $("#todaysDate").text(date);  

    // get saved info for 9am and set it to the inputs value
    var savedInfo = JSON.parse(localStorage.getItem("nineAm"));
    if (savedInfo !== null) {
        mainEl[0].children[0].children[1].children[0].value = savedInfo;
    }

    // get saved info for 10am and set it to the inputs value
    var savedInfo = JSON.parse(localStorage.getItem("tenAm"));
    if (savedInfo !== null) {
        mainEl[0].children[1].children[1].children[0].value = savedInfo;
    }

     // get saved info for 11am and set it to the inputs value
     var savedInfo = JSON.parse(localStorage.getItem("elevenAm"));
     if (savedInfo !== null) {
         mainEl[0].children[2].children[1].children[0].value = savedInfo;
     }

     // get saved info for 12pm and set it to the inputs value
     var savedInfo = JSON.parse(localStorage.getItem("twelvePm"));
     if (savedInfo !== null) {
         mainEl[0].children[3].children[1].children[0].value = savedInfo;
     }

    // get saved info for 1pm and set it to the inputs value
    var savedInfo = JSON.parse(localStorage.getItem("onePm"));
    if (savedInfo !== null) {
        mainEl[0].children[4].children[1].children[0].value = savedInfo;
    }

    // get saved info for 2pm and set it to the inputs value
    var savedInfo = JSON.parse(localStorage.getItem("twoPm"));
    if (savedInfo !== null) {
        mainEl[0].children[5].children[1].children[0].value = savedInfo;
    }

    // get saved info for 3pm and set it to the inputs value
    var savedInfo = JSON.parse(localStorage.getItem("threePm"));
    if (savedInfo !== null) {
        mainEl[0].children[6].children[1].children[0].value = savedInfo;
    }

    // get saved info for 4pm and set it to the inputs value
    var savedInfo = JSON.parse(localStorage.getItem("fourPm"));
    if (savedInfo !== null) {
        mainEl[0].children[7].children[1].children[0].value = savedInfo;
    }
    
    // get saved info for 5pm and set it to the inputs value
    var savedInfo = JSON.parse(localStorage.getItem("fivePm"));
    if (savedInfo !== null) {
        mainEl[0].children[8].children[1].children[0].value = savedInfo;
    }
}

// call init
init();