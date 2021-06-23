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

  // Select values from each filter input
  var date = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value");
  var state = d3.select("#state").property("value");
  var country = d3.select("#country").property("value");
  var shape = d3.select("#shape").property("value");

  // Reset filteredData equal to full dataset 
  var filteredData = tableData;

  // Clear table rows to reapply filters using clearTableRows() function defined above
  clearTableRows();

  // Consecutively add filters when non-blank
  if (date) {
    filteredData = filteredData.filter((row) => row.datetime === date);
  };

  if (city) {
    filteredData = filteredData.filter((row) => row.city === city);
  };

  if (state) {
    filteredData = filteredData.filter((row) => row.state === state);
  };

  if (country) {
    filteredData = filteredData.filter((row) => row.country === country);
  };

  if (shape) {
    filteredData = filteredData.filter((row) => row.shape === shape);
  };

  // render data after applying all filters using renderData function defined above
  renderData(filteredData);

};
