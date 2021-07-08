import { easePoly, line } from "d3";
import womenByWomen from "../../script/artdata/womenByWomen";
const container = {};
container.render = (selector, cellCount) => {
  var svg = d3.select(selector), //selects element tagged svg
    width = +svg.attr("width"), //accessing the width property
    height = +svg.attr("height"), //accessing the height property
    radius = 10;
  //range sets the number of circles
  let circles = d3.range(cellCount).map(function () {
    return {
      x: Math.round(Math.random() * (width - radius * 2) + radius),
      y: Math.round(Math.random() * (height - radius * 2) + radius),
    };
  });

  const voronoi = d3
    .voronoi()
    .x(function (d) {
      return d.x;
    })
    .y(function (d) {
      return d.y;
    })
    .extent([
      [-1, -1],
      [width + 1, height + 1],
    ]);
  const defs = svg.append("svg:defs");

  womenByWomen.forEach((painting, index) => {
    defs
      .append("svg:pattern")
      .attr("id", `painting${index}`)
      .attr("preserveAspectRatio", "xMidYMid slice")
      .attr("width", "100%") //in pixels//could this be changed to the width of the cell.
      .attr("height", "100%") //in pixels
      .attr("patternUnits", "objectBoundingBox")
      // .style("fill-rule","evenodd")
      .append("svg:image")
      .attr("href", painting.primaryImageSmall)
      .attr("preserveAspectRatio", "xMidYMid slice")
      .attr("width", "100%")
      .attr("height", "100%");
  });
  const color = d3.scaleOrdinal().range(d3.schemeCategory20);
  //selects all the children of SVG's containers
  const circle = svg
    .selectAll("g")
    .data(circles)
    .enter()
    .append("g")
    .call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

  let cell = circle
    .append("path")
    .data(voronoi.polygons(circles))
    .attr("d", renderCell)
    .attr("id", function (d, i) {
      return "cell-" + i;
    })
    .style("fill", (d, i) => `url(#painting${i % womenByWomen.length}`);

  circle
    .append("clipPath")
    .attr("id", function (d, i) {
      return "clip-" + i;
    })
    .append("use")
	.attr("clipPathUnits", "objectBoundingBox")
    .attr("xlink:href", function (d, i) {
      return "#cell-" + i;
    })
    .style("fill", "none");

  circle
    .append("circle")
    .attr("class", function (d, i) {
      return "cell-" + i;
    })
    .attr("clip-path", function (d, i) {
      return "url(#clip-" + i + ")";
    })
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    })
    .attr("r", radius)
    .style("fill", "none");

  function moveCircles() {
   let newCircles = circles.map( circle => {
	let random = Math.floor(Math.random() + 10)

	const trueOrFalse = Math.random() < 0.5
	if(trueOrFalse) {
		random = -random
	}
      return {
        x:  circle.x + random,
        y: circle.y + random,
      };
    });
	circles = newCircles
    d3.selectAll("path")
	.data(voronoi.polygons(circles))
	.attr("d", renderCell)
	.transition()
	.duration(600)
	.ease(d3.easeBounce)
	.on("end", moveCircles)
}

setTimeout(moveCircles);

function dragstarted(d) {
    d3.select(this).raise().classed("active", true);
  }

  function dragged(d) {
    d3.select(this)
      .select("circle")
      .attr("cx", (d.x = d3.event.x))
      .attr("cy", (d.y = d3.event.y));
    cell = cell.data(voronoi.polygons(circles)).attr("d", renderCell);
  }
  function dragended(d, i) {
    d3.select(this).classed("active", false);
  }
  function renderCell(d) {
    const dPath = d == null ? null : "M" + d.join("L") + "Z";
    return dPath;
  }
};

export default container;
