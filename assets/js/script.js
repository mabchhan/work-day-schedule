// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function timeTracker() {
    //get current hours.
    var currentHour = dayjs().format("HH");

    // loop over time blocks
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("-")[1]);

      // To check the time and add the classes for background indicators
      if (timeBlock < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (timeBlock === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
      // console.log(timeBlock);
    });
  }
  timeTracker();

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDayEl = $("#currentDay");
  currentDayEl.text(dayjs().format("dddd MMMM DD, YYYY")); // dayjs() is current day 'today'
});
