const numbers = [10829, 14350, 2027]

const lollipop = {
    render(selector, height, width) {

        var svg = d3.select(selector)
        .attr("width", width)
        .attr("height", height)

        const g = svg.selectAll("g")
        .data(numbers)
        .enter().append("g")
        .attr("id", function(d, i) {return i})

        const bars = svg.selectAll("g")
        .data(numbers)
        .append("rect")
        .attr("class","barGraphs")
        .attr("height","1")
        .attr("width","0")
        .attr('fill-opacity', 1)
        .attr("x", "0")
        .attr("y",function(d,i) {return (i*50)+51})
        .transition()
        .duration(1000)
        .attr("width", function(d, i) { return (d/50)})

        const circles = svg.selectAll("g").append("circle")
        .attr("class", "circlesGraph")
        .attr("cx", "0")
        .attr("cy", function(d,i) {return (i*50)+ 50})
        .attr('fill-opacity', 1)
        .attr('r', 0)
        .transition()
        .duration(1000)
        .attr("r", 5)
        .attr('cx', function(d, i) { return (d/50+1)})
        .attr('cy', function(d,i) {return (i*50)+ 51})

        const texts = svg.selectAll("g")
        .append("text")
        .text(function(d) {return d})
        .attr("id", function(d,i) {return `text${i}`})
        .attr("class", "barText")
        .attr("x", width + 100)
        .attr("y", function(d, i) {return (i*50) + 55 })
        .transition()
        .delay(1500)
        .duration(3000)
        .ease(d3.easePoly)
        .attr("x",  function(d,i)  { return (d/50 + 25)})



        svg.selectAll("g").selectAll("circle")
        .transition()
        .delay(2500)
        .duration(3000)
        .attr("cy", "100")
        .attr("cx", function(d, i) { return (d/50 +2)})

        svg.selectAll("g").selectAll("rect")
        .transition()
        .delay(2500)
        .duration(1000)
        .attr("fill-opacity", 0)

        d3.selectAll("text")
        .each( function(d,i) {
            if(i !== 1) {
                d3.select(this)
                .attr("fill-opacity", 1)
                .transition()
                .duration(1000)
                .attr("fill-opacity", 0)
                .duration(2000)
                .delay(7000)
                .ease(d3.easePoly)
            }
        })

    }
}

export default lollipop