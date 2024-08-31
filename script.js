function minDate(dates) {
  // Initialize the minimum date to the first date in the array
  let minDate = dates[0];

  // Loop through each date in the array
  for (let i = 1; i < dates.length; i++) {
    // Split the current date and the minimum date into year, month, and day components
    let currentDateParts = dates[i].split("/");
    let minDateParts = minDate.split("/");

    // Compare the year components
    if (currentDateParts[0] < minDateParts[0]) {
      minDate = dates[i];
    } else if (currentDateParts[0] === minDateParts[0]) {
      // Compare the month components
      if (currentDateParts[1] < minDateParts[1]) {
        minDate = dates[i];
      } else if (currentDateParts[1] === minDateParts[1]) {
        // Compare the day components
        if (currentDateParts[2] < minDateParts[2]) {
          minDate = dates[i];
        }
      }
    }
  }

  return minDate;
}