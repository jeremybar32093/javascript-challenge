# javascript-challenge

This repository uses the [D3 javascript library](https://d3js.org/) to dynamically render an html table based on a dataset of UFO sightings. Event listeners are then used to  perform filtering operations based on a simple html input form. 


In the **UFO-level-1** folder, data is read in from a file called *data.js*, and javascript event listeners are created in the *app.js* file to filter the data shown on screen when the user inputs a proper date, and either presses the enter key or the "Filter Data" button on the screen. 

The **UFO-level-2** folder builds upon the **UFO-level-1** folder by incorporating additional filtering options. The *index.html* file in the **UFO-level-2** folder allows for the following filters:
* Date
* City
* State
* Country
* Shape

Pressing the enter key after updating any filter or the "Filter Data" button on the screen will apply all filters input. 
