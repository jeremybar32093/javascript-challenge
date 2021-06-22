// from data.js
var tableData = data;

// YOUR CODE HERE!

//1. Identify table body within which to append data rows
var tbody = d3.select("tbody")

//2. Loop through data entries to create data table
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

