// from data.js
var tableData = data;

// YOUR CODE HERE!

// 1. Identify table body within which to append data rows
var tbody = d3.select("tbody");

// 2. Create function for rendering data
function renderData(data) {
  data.forEach((data) => {
    // Append table row tags within table body
    var row = tbody.append("tr");
    // Loop through values within each data entry
    Object.entries(data).forEach(([key, value]) => {
      // Append td tag within table row created above
      var cell = row.append("td");
      // Add values as text within td tags
      cell.text(value);
    });
  });
};

// 3. Create function for clearing out table rows
function clearTableRows() {
  var tableRows = d3.selectAll("#ufo-table tbody tr");
  tableRows.remove();
}


// 4. Render initial table data by calling function defined above
renderData(tableData);

// 5. For event handlers, select form and button html elements
var button = d3.select("#filter-btn");
var form = d3.select("form");

// 6. Create event handlers
// Event listener for clicking "Filter Table" button
button.on("click", runEnter);
// Event listener for pressing "Enter" after updating input form
form.on("submit", runEnter);

// 7. Create function to execute when event listeners are triggered
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select date value from form input
  var date = d3.select("#datetime").property("value");

  console.log(date);

  // Apply event listener logic only if date is event is triggered 
  // If date is non-null, return filtered value based on date input
  if (date) {
    // Clear out td tags within tbody - call function defined above
    clearTableRows();
    // Get filtered data to be rendered
    var filteredData = tableData.filter((row) => row.datetime === date);
    console.log(filteredData);
    // Call renderData function for only filteredData
    renderData(filteredData);
  } 
    // If date is null, rerender full dataset
    else {
    // Clear out td tags within tbody - call function defined above
    clearTableRows();
    // Rerender original full dataset
    // Call renderData function with tableData variable defined above
    renderData(tableData);
  };
};
