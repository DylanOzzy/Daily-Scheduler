const dayjsObject = dayjs();
var todaysDate = $('#currentDay');

function displayCurrentTime() {
  todaysDate.text(dayjsObject.format('hh:mm A dddd, MMMM DD, YYYY '));
}

displayCurrentTime();

$(document).ready(function () {
  // Load data from local storage and populate the corresponding textarea
  $('.todoItemsSet').each(function () {
    const element = $(this);
    const key = element.data('id');
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      element.val(savedValue);
    }
  });
  
  // Save data to local storage when the save button is clicked
  $('.saveBtn').on('click', function () {
    const element = $(this).siblings('.todoItemsSet');
    const key = element.data('id');
    const value = element.val();
    localStorage.setItem(key, value);
  });
});

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  const hour = dayjsObject.hour();
  $('.time-block').each(function () {

  });





























