

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
        .datum(400) // single value for datum
    
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
        .style("fille", "FFFFFF"); 
    
    console.log(innerRect);
};