//Adapted from D3 Tips and Tricks v4.x Interactive Data Visualization in a Web Browser
//by Malcolm Maclean, available at https://leanpub.com/d3-t-and-t-v4

//and Scatter Plot with Time Axis by Curran Kelleher, available at 
//https://bl.ocks.org/curran/3f2ff2e32652397de94d406460e240ce

let drawScatter = function (data){
    const margin = { top: 20, right: 20, bottom: 30, left: 50 },
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    // parse the date / time
    //var parseTime = d3.timeParse("%d-%b-%y");

    // set the ranges
    let x = d3.scaleTime().range([0, width]);
    let y = d3.scaleLinear().range([height, 0]);

    let svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(d3.extent(data, function (d) { return d.date; }));
    y.domain([0, d3.max(data, function (d) { return d.close; })]);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    svg.append("g")
        .call(d3.axisLeft(y));

    // draw dots
    svg.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 3.5)
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; })
        .style("fill", function (d) { return color(cValue(d)); })
    // .on("mouseover", function (d) {
    //     tooltip.transition()
    //         .duration(200)
    //         .style("opacity", .9);
    //     tooltip.html(d["Cereal Name"] + "<br/> (" + xValue(d)
    //         + ", " + yValue(d) + ")")
    //         .style("left", (d3.event.pageX + 5) + "px")
    //         .style("top", (d3.event.pageY - 28) + "px");
    // })
    // .on("mouseout", function (d) {
    //     tooltip.transition()
    //         .duration(500)
    //         .style("opacity", 0);
    // });
}

export { drawScatter };
