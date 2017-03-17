

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
    
    
    // example for showing complicated arrays to show multiple data values joined using data() instead of datum()
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];
    

    
    // finds max & min of populations
    var minPop = d3.min(cityPop, function(d) {
        console.log("minPop: ", minPop);
        return d.population;
    });
    var maxPop = d3.max(cityPop, function(d) {
        console.log("maxPop: ", maxPop);
        return d.population;
    });
    
    // x-coordinate scale object (as a generator function to create another array of values)
    var xScale = d3.scaleLinear()
        .range([90, 810]) // output min & max
        .domain([0, 3]); // input min & max    
    
    // scale y-coordinate circles using max & min values
    var yScale = d3.scaleLinear()
        .range([440, 95])   // 440 is listed 1st since it's the higher range & SVG coord [0,0] is UPPER LEFT corner
        .domain([minPop, maxPop]);
    
    
    // create a new (empty) circle selection & binding a data array to the container element above
    var circles = container.selectAll(".circles") // selects all matching elements in DOM...but in this case it creates an empty selection since .circles class doesn't yet exist
        .data(cityPop)
        .enter() //joins data to selection & creates an array of placeholders for one markup element per data array value.
        .append("circle") // adds 1 circle to each array datum
        .attr("class", "circles") // applies class of "circles" to each datum
        
        .attr("id", function(d) {
            return d.city;
        })
        // calculate SVG radius based on city population as circle area, where "d" is the data of the selection; i is the index
        .attr("r", function(d) {
            var area = d.population * 0.01;
            return Math.sqrt(area/Math.PI);
        })
        .attr("cx", function(d, i) {    // SVG's x coord
            return xScale(i); // uses the scale generator function of i (index) to place each circle horizontally???
        })
        .attr("cy", function(d){
            return yScale(d.population);
        });
//    console.log("Circles: ", circles);
};