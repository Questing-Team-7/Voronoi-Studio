import React from "react";
import container from "./components/vornoi";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import womenByWomen from "../script/artdata/womenByWomen";
import womenByMen from "../script/artdata/femaleNudesByMen";

import chart from "./components/pulsate";

// import * as Scroll from 'react-scroll';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { animateScroll as scroll } from "react-scroll";
// import { d3 } from "d3";
// import { Delaunay } from "d3-delaunay";
// import { Delaunay } from "https://cdn.skypack.dev/d3-delaunay@6%22";

class App extends React.Component {
	constructor() {
		super();
		this.scrollToTop = this.scrollToTop.bind(this);
		this.chartRender1 = chart.render("#canvas1", 500, 960, womenByWomen);
		this.chartRender2 = chart.render("#canvas2", 500, 960, womenByMen);
		this.chartRender3 = chart.render(
			"#canvas3",
			500,
			960,
			womenByWomen.concat(womenByMen)
		);
		this.state = { toggle: false };
	}

	componentDidMount() {
		// container.render("#svg1", 10);
		// container.render("#svg2", 20);
		// container.render("#svg3", 15);
		// chart.generator("#canvas1", 500, 960, 30)

		this.interval = setInterval(() => {
			this.chartRender1.next();
			this.chartRender2.next();
			this.chartRender3.next();
		}, 10);
	}
	componentDidUpdate() {
		this.chartRender.next();
	}
	scrollToTop() {
		scroll.scrollToTop();
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div>
				<Navbar />

				<h1 id="title">VORONOI STUDIO</h1>

				<Controller>
				<Scene duration = {1000} pin={true} enabled={true}>
				<Tween
            position="0"
            from={{
              yPercent: -50,
            }}
            to={{
                yPercent: 0,
            }}>
				<canvas id="canvas3" width="960" height="500"></canvas>
				</Tween>
				</Scene>	
				<Scene duration = {1000} pin={true} enabled={true}>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem accusantium doloremque laudantium, totam rem
					aperiam, eaque ipsa quae ab illo inventore veritatis et
					quasi architecto beatae vitae dicta sunt explicabo. Nemo
					enim ipsam voluptatem quia voluptas sit aspernatur aut odit
					aut fugit, sed quia consequuntur magni dolores eos qui
					ratione voluptatem sequi nesciunt. Neque porro quisquam est,
					qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
					velit, sed quia non numquam eius modi tempora incidunt ut
					labore et dolore magnam aliquam quaerat voluptatem. Ut enim
					ad minima veniam, quis nostrum exercitationem ullam corporis
					suscipit laboriosam, nisi ut aliquid ex ea commodi
					consequatur? Quis autem vel eum iure reprehenderit qui in ea
					voluptate velit esse quam nihil molestiae consequatur, vel
					illum qui dolorem eum fugiat quo voluptas nulla pariatur?
				</p>
				</Scene>
				<canvas className="sticky" id="canvas1" width="960" height="500"></canvas>
					<Scene duration = {1000} pin={true} enabled={true} triggerHook="onLeave">
					{/* <Timeline
          wrapper={<div className="parallax" />}
        >
						this timeline animation would make background images appear to move slower than foreground creating depth. */}
					{/* <Tween
            position="0"
            from={{
              yPercent: -100,
            }}
            to={{
                yPercent: -100,
            }}
          > */}
						{/* this tween animation puts a delay on the scroll between the elements*/}
						{(progress) => (
            <div className="sticky">
              <Timeline totalProgress={progress} paused>
                <Tween
                    from={{ x: '10%', top: '60%' }}
                    to={{ x: '60%', top: '10%' }}
                >
                  <div className="animation">
                    <svg xmlns="https://upload.wikimedia.org/wikipedia/commons/9/97/Circle-icons-art.svg" viewBox="0 0 29.267 29.267">

                      <path d="M25.925 13.574c.405.173.928.295 1.571.366.295.025.579.036.86.036.326 0 .632-.018.911-.054-.351.329-.803.614-1.349.857-.552.244-1.262.365-2.138.365a9.544 9.544 0 0 1-2.23 4.028c-1.082 1.188-2.37 2.169-3.862 2.943s-3.131 1.312-4.926 1.617c-1.01.182-2.019.272-3.033.272-.765 0-1.533-.055-2.297-.164a15.456 15.456 0 0 1-5.118-1.617C2.669 21.378 1.232 20.169 0 18.599a7.4 7.4 0 0 0 2.433 1.435 8.417 8.417 0 0 0 5.828-.037 7.352 7.352 0 0 0 2.594-1.672 2.821 2.821 0 0 1-.441.036c-.279 0-.534-.049-.764-.146-.367-.146-.62-.345-.757-.594-.142-.249-.142-.524 0-.823.137-.298.493-.562 1.067-.792a5.375 5.375 0 0 1-.566.034c-.283 0-.544-.024-.783-.07a3.205 3.205 0 0 1-1.052-.375 3.369 3.369 0 0 1-.743-.577 3.723 3.723 0 0 1-.494-.66 2.57 2.57 0 0 1 .823-.499c.305-.116.706-.188 1.205-.211-1.118-.243-1.917-.606-2.391-1.078-.475-.475-.777-1.022-.895-1.643.33-.051.657-.108.994-.174.333-.069.6-.076.796-.029-.953-.475-1.614-1.029-1.994-1.662-.327-.559-.492-1.085-.492-1.572 0-.061.006-.127.019-.201a72.606 72.606 0 0 1 4.337 1.644c1.177.501 2.221.988 3.134 1.465.353.142.704.361 1.06.655l1.151.989a21.586 21.586 0 0 1 1.854-3.766c.359-.583.762-1.121 1.213-1.608a6.278 6.278 0 0 1 1.534-1.205c-.023.278-.167.555-.436.822.33-.278.685-.503 1.067-.677.387-.17.792-.283 1.216-.345-.049.28-.248.51-.604.685a8.51 8.51 0 0 1-.93.41c.096-.023.29-.087.574-.189.287-.104.592-.2.915-.283.326-.086.615-.144.879-.164.26-.025.417.021.464.145.072.146.03.271-.127.374a2.52 2.52 0 0 1-.577.267 7.996 7.996 0 0 1-.673.182c-.227.05-.375.086-.447.108l-.677.237a5.371 5.371 0 0 1 2.045.237 5.707 5.707 0 0 1 1.81.953 7.213 7.213 0 0 1 1.441 1.497 6.09 6.09 0 0 1 .914 1.844l.074.293c.021.097.048.205.072.326.244.076.535.12.879.139.34.017.677 0 1.014-.055.332-.054.637-.123.909-.209.276-.085.494-.165.651-.237-.194.476-.569.874-1.124 1.196-.557.32-1.249.505-2.074.555z"/>
                    </svg>
                  </div>
                </Tween>
                <Timeline
                  target={
                    <div className="heading">
                      <h2>This could be a clickable link</h2>
                    </div>
                  }
                >
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                  />
                  <Tween
                    to={{ x: '110%' }}
                  />
                </Timeline>
              </Timeline>
            </div>
          )}
				{/* </Tween> */}
				{/* </Timeline> */}
				</Scene>
				<Scene duration = {1000} pin={true} enabled={true}>
				{/* scene pins the given element to the screen for the number of scolled pixels from duration */}
				<p>
					At vero eos et accusamus et iusto odio dignissimos ducimus
					qui blanditiis praesentium voluptatum deleniti atque
					corrupti quos dolores et quas molestias excepturi sint
					occaecati cupiditate non provident, similique sunt in culpa
					qui officia deserunt mollitia animi, id est laborum et
					dolorum fuga. Et harum quidem rerum facilis est et expedita
					distinctio. Nam libero tempore, cum soluta nobis est
					eligendi optio cumque nihil impedit quo minus id quod maxime
					placeat facere possimus, omnis voluptas assumenda est, omnis
					dolor repellendus. Temporibus autem quibusdam et aut
					officiis debitis aut rerum necessitatibus saepe eveniet ut
					et voluptates repudiandae sint et molestiae non recusandae.
					Itaque earum rerum hic tenetur a sapiente delectus, ut aut
					reiciendis voluptatibus maiores alias consequatur aut
					perferendis doloribus asperiores repellat.
				</p>
				</Scene>
				<Tween
            position="0"
            from={{
              yPercent: -100,
            }}
            to={{
                yPercent: 0,
            }}>
				<canvas id="canvas2" width="960" height="500"></canvas>
				</Tween>
			
				</Controller>
				<br />
				<a onClick={() => this.scrollToTop()}>To the top!</a>
			</div>
		);
	}
}

export default App;
