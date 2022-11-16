// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var id = [
    "hour-9",
    "hour-10",
    "hour-11",
    "hour-12",
    "hour-13",
    "hour-14",
    "hour-15",
    "hour-16",
    "hour-17",
  ];

  for (var i = 0; i < 9; i++) {
    var mainContainer = $(".container-lg");
    var container = $('<div class="row time-block "></div>');
    container.attr("id", id[i]);
    // container.text(id[i]);

    var textHour = $(
      '<div class="col-2 col-md-1 hour text-center py-3"></div>'
    );
    var hour = id[i].split("-")[1];

    textHour.text(hour + "AM");
    if (hour >= 12) {
      textHour.text(hour - 12 + "PM");
    }

    var textArea = $(
      '<textarea class="col-8 col-md-10 description" rows="3"> </textarea>'
    );

    var button = $(
      '<button class="btn saveBtn col-2 col-md-1" aria-label="save"></button>'
    );

    var img = $('<i class="fas fa-save" aria-hidden="true"></i>');

    mainContainer.append(container);
    container.append(textHour);
    container.append(textArea);
    container.append(button);
    button.append(img);
  }
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

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

  // get value from local storage

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  //
  // display the current date in the header of the page.
  var currentDayEl = $("#currentDay");
  currentDayEl.text(dayjs().format("dddd MMMM DD, YYYY")); // dayjs() is current day 'today'
});
