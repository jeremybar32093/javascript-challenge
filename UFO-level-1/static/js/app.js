// from data.js
var tableData = data;

// YOUR CODE HERE!

// 1. Identify table body within which to append data rows
var tbody = d3.select("tbody")

// 2. Loop through data entries to create initial data table
data.forEach((tableData) => {
    // Append table row tags within table body
    var row = tbody.append("tr");
    // Loop through values within each data entry
    Object.entries(tableData).forEach(([key, value]) => {
        // Append td tag within table row created above
        var cell = row.append("td");
        // Add values as text within td tags
        cell.text(value);
    }); 
});

// 3. For event handlers, select form and button html elements
var button = d3.select("#filter-btn");
var form = d3.select("form");

// 4. Create event handlers 
// Event listener for clicking "Filter Table" button
button.on("click", runEnter);
// Event listener for pressing "Enter" after updating input form
form.on("submit", runEnter);

// 5. Create function to execute when event listeners are triggered
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    console.log("Event triggered")
};


