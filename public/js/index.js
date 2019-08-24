// This file is largely a modification of a pie chart example 
// publishd by Yan Holtz, found here: https://www.d3-graph-gallery.com/graph/pie_basic.html

let drawChart = function (data) {
    const width = 450,
        height = 450,
        radius = 200;

    const initText = "Category";
    const initValue = "$0.00";

    var color = d3.scaleOrdinal()
        .domain(data)
        .range(["#005699", "#136F63", "#3CA1E0", "#F26813", "#584382"])

    console.log("Hit drawChart");
    let svg = d3.select("#pieData")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("class", "piechart")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    let pie = d3.pie()
        .value(function (d) { return d.value; })

    let data_ready = pie(d3.entries(data))
    console.log("DATA READY");
    console.log(data_ready);
    svg.selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
            .innerRadius(125)
            .outerRadius(radius)
        )
        .attr('fill', function (d) { return (color(d.data.key)) })
        .on("mouseover", mouseOver);

    svg.append('text')
        .attr("dy", "-0.25em")
        .style("text-anchor", "middle")
        .style("font", "16px")
        .attr("fill", "#36454f")
        .attr("id", "innerTextCategory")
        .text(initText);

    svg.append('text')
        .attr("dy", "1.35em")
        .style("text-anchor", "middle")
        .style("font", "16px")
        .attr("fill", "#36454f")
        .attr("id", "innerTextAmount")
        .text(initValue);

}

let mouseOver = function () {
    let value = d3.select(this).data()[0].data;
    d3.select("#innerTextCategory").text(value.key);
    d3.select("#innerTextAmount").text("$" + value.value);

};

export { drawChart };