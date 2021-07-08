import React from "react";
import container from "./components/vornoi";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import american from "../script/artdata/american";

// import chart from "./components/pulsate";

// import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from "react-scroll";
// import { d3 } from "d3";
// import { Delaunay } from "d3-delaunay";
// import { Delaunay } from "https://cdn.skypack.dev/d3-delaunay@6%22";

class App extends React.Component {
  constructor() {
    super();
    this.scrollToTop = this.scrollToTop.bind(this);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // container.render("#svg1", 10);
    // container.render("#svg2", 20);
    // container.render("#svg3", 15);
    let RADIUS = 10;
    let WIDTH = 960;
    let HEIGHT = 500;
    let CELLCOUNT = 20;

    let canvas = d3
      .select(this.myRef.current)
      .append("canvas")
      .attr("width", WIDTH)
      .attr("height", HEIGHT);

    const context = canvas.node().getContext("2d");

    //"data"
    const positions = Float64Array.from(
      { length: CELLCOUNT * 2 },
      (_, i) => Math.random() * (i & 1 ? HEIGHT : WIDTH)
    );

    const velocities = new Float64Array(CELLCOUNT * 2);
    console.log(velocities);

    const array = [
      -0.005134443438958725, 0.00289055593404024, 0.07703647839572869,
      -0.038366408664902485, -0.01897559652241254, 0.011617604601184706,
      -0.01891101462406182, 0.054875950436807264, 0.049800541836898575,
      -0.0052087306196248575, -0.02225221046843715, -0.0025004768635072065,
      0.011653079244827459, -0.06734214165045756, 0.007924870868614153,
      0.08920470045678797, -0.010361622766227452, 0.09493800337336902,
      -0.0037974372411119007, -0.004985142199129689, -0.0925075582488356,
      -0.0736146176006868, -0.0885551177937491, 0.09610557149880505,
      -0.0018764845805064657, 0.08750647218862327, 0.0929767722823811,
      -0.08264167148471487, -0.03703797593395968, 0.08631850861580306,
      -0.056181179826150986, 0.06004023800624525, 0.017161592954848936,
      0.0014243328001326994, -0.06375860625170562, -0.04270549054227524,
      -0.09319385443674136, 0.09979326113684493, 0.09946916181071407,
      0.029856315892945996,
    ];

    //change positions & velocity here
    console.log("before", positions);
    for (let i = 0; i < positions.length; ++i) {
      const size = i & 1 ? HEIGHT : WIDTH;
      positions[i] += array[i];
      console.log(velocities[i]);
      if (positions[i] < 0) positions[i] += size;
      else if (positions[i] > size) positions[i] -= size;
      array[i] += 0.2 * (Math.random() - 0.5) - 0.01 * array[i];
    }
    console.log("after", positions);

    const voronoi = new d3.Delaunay(positions).voronoi([
      0.5,
      0.5,
      WIDTH - 0.5,
      HEIGHT - 0.5,
    ]);

    const databind = () => {
      const join = d3.select("canvas").selectAll("custom").data(positions);

      const enter = join
        .enter()
        .append("custom")
        .attr("class", "cell")
        .attr("data", 0);
      // .attr("data", (d) => d) //move down
      // .attr("fillStyle", (d, i) => {
      //   //move down
      //   return american[i].primaryImageSmall;
      // });

      join
        .merge(enter)
        .attr("data", (d) => d) //pass in changed positions & image?
        .attr("fillStyle", (d, i) => {
          return american[i].primaryImageSmall;
        });

      const exit = join
        .exit()
        .transition(900)
        .attr("dat", 0)
        .attr("fillStyle", "")
        .remove();
    };

    databind();

    const draw = () => {
      // context.fillStyle = "ffffff30";
      context.fillRect(0, 0, WIDTH, HEIGHT);

      voronoi.update();
      const elements = d3.selectAll(".cell");
      elements.each((d, i, l) => {
        //d = data, i = index , l = nodeList
        const cell = d3.select(l[i]);
        // console.log(cell.nodes()[0].outerHTML);
        // console.log(cell.attr("fillStyle"));
        const patterns = [];
        let img = new Image();
        // console.log(cell.attr("fillStyle"));
        img.src = cell.attr("fillStyle");
        img.onload = function () {
          patterns[i] = context.createPattern(img, "repeat");
        };
        context.fillStyle = patterns[i % patterns.length];
        context.beginPath();
        voronoi.renderCell(i, context);
        context.fill();
      });

      context.beginPath();
      // voronoi.update().render(context);
      voronoi.renderBounds(context);
      context.stroke();

      context.beginPath();
      voronoi.delaunay.renderPoints(context, 1);
      context.fill();

      return context.canvas;
    };
    draw();
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <div ref={this.myRef}></div>
        <svg id="svg1" width="960" height="500"></svg>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <svg id="svg2" width="960" height="500"></svg>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
        <svg id="svg3" width="960" height="500"></svg>
        <br />
        <a onClick={() => this.scrollToTop()}>To the top!</a>
      </div>
    );
  }
}

export default App;
