// This file is largely a modification of a pie chart example 
// publishd by Yan Holtz, found here: https://www.d3-graph-gallery.com/graph/pie_basic.html

let drawChart = function (data) {
    const width = 450,
        height = 450,
        radius = 200;

    var color = d3.scaleOrdinal()
        .domain(data)
        .range(["#005699", "#136F63", "#3CA1E0", "#F26813", "#584382"])

    console.log("Hit drawChart");
    let svg = d3.select("#pieData")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    let pie = d3.pie()
        .value(function (d) { return d.value; })
    var data_ready = pie(d3.entries(data))

    svg
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
            .innerRadius(0)
            .outerRadius(radius)
        )
        .attr('fill', function (d) { return (color(d.data.key)) })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7);
}

export { drawChart };