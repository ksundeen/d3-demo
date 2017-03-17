

// Execute script when window opens
window.onload = function() {
    // SVG graphic dimensions
    var w = 900, h = 500;
    
    var container = d3.select("body") // gets body element from DOM
        .append("svg") // put a svg in body element
        .attr("width", w) // svg width
        .attr("height", h) // svg height
        .attr("class", "container") // assigns class to element container
        .style("background-color", "rgba(0,0,0,0.2)");
    console.log(container);
    
    // Append rectangle to container svg object above
    var innerRect = container.append("rect")
        .datum(400) // single value for datum (compared to data())
    
        // returns anonymous functions for width & height of rect object
        .attr("width", function(d) {
            return d * 2; // returns 2 * 400 = 800
        })
        .attr("height", function(d) {
            return d;  // returns 400
        })
        .attr("class", "innerRect") // adding class name to element
        .attr("x", 50) // position from left on x
        .attr("y", 50) // position from top on y
        .style("fill", "FFFFFF"); 
    
    console.log("innerRect: ", innerRect);
    
    
    // example for showing arrays to show multiple data values joined using data() instead of datum()
    var dataArray = [10, 20, 30, 40, 50];
    
    // create a new (empty) circle selection & binding a data array to the container element above
    var circles = container.selectAll(".circles") // selects all matching elements in DOM...but in this case it creates an empty selection since .circles class doesn't yet exist
        .data(dataArray)
        .enter() //joins data to selection & creates an array of placeholders for one markup element per data array value.
        .append("circle") // adds 1 circle to each array datum
        .attr("class", "circles") // applies class of "circles" to each datum
        
        // use function to create the circle's radius & get current datum (d), the current index (i) as default values within the attr() function
        .attr("r", function(d, i) {
            console.log("d: ", d, "i: ", i);
            return d;
        })
        .attr("cx", function(d, i) {    // x coord
            return 70 + (i * 180);
        })
        .attr("cy", function(d) {   // y coord
            return 450 - (d * 5);
        });
    console.log("Circles: ", circles);
};