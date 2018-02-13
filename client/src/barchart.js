// var dataArray = [1  ,0,0,0,4,1,0,3,4,2,-1,4,2,1,1,3,-1,1,7,1,2,0,0,0,1,4,3,2,2,1,8,0,-3,0,1,0,0,6,4,7,-3,3,2,0,-3,0,-1,-3,2,2,2,3,0,-1,-2,1,0,3,-1,0,-1,0,-1,3,0,-2,6,2,0,0,4,-3,0,6,4,-1,-4,2,0,3,1,6,1,1,5,6,2,0,5,4,0,-3,-1,-3,5,0,0,-3,1,2];

// var svg = d3.select("body").append("svg")
//           .attr("height","100%")
//           .attr("width","100%");

// svg.selectAll("rect")
//     .data(dataArray)
//     .enter().append("rect")
//           .attr("class", "bar")
//           .attr("height", function(d, i) {return (d * 10)})
//           .attr("width","40")
//           .attr("x", function(d, i) {return (i * 60) + 25})
//           .attr("y", function(d, i) {return 400 - (d * 10)});


//  svg.selectAll("text")
//     .data(dataArray)
//     .enter().append("text")
//     .text(function(d) {return d;})
//     	.attr("class", "text")
//     	.attr("x", function(d, i)  {return (i * 60) + 36})
//         .attr("y", function(d, i)  {return 415 - (d * 10)});