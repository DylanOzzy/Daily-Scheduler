const dayjsObject = dayjs();
const time = $(".time");
var hour = dayjsObject.hour();

function displayCurrentTime() {
  var todaysDate = $('#currentDay');
  todaysDate.text(dayjsObject.format('hh:mm A dddd, MMMM DD, YYYY '));
}

$(document).ready(function () {
  $('.todoItemsSet').each(function () {
    const element = $(this);
    const key = element.data('id');
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      element.val(savedValue);
    }
  });
  
  $('.saveBtn').on('click', function () {
    const element = $(this).siblings('.todoItemsSet');
    const key = element.data('id');
    const value = element.val();
    localStorage.setItem(key, value);
  });
});

$(document).ready(function () {
  $(".time-block").each(function () {
    let thisText = parseInt($(this).text());
    let timeValue = thisText + (thisText < 9 ? 12 : 0);
    if (timeValue > hour) {
      $(this).addClass("future");
    } else if (timeValue === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
});

displayCurrentTime();


























