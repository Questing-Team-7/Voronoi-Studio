import React from "react";
import { Button } from "reactstrap";
import Footer from "./Footer";
import { Controller, Scene } from 'react-scrollmagic';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// var scroll = window.requestAnimationFrame || function (callback){window.setTimeout,epit(callback, 1000/60)};

function Home () {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#front-page-voronoi-button"),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity:1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector("#front-page-voronoi"),
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#lead-text-button"),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity:1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".lead"),
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#enterBtn"),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity:1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector("#enterBtn"),
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );
  }, []);



    return (
      <div ref={ref} className="home-parent-div">
        <h1 className="display-1 text-center">Welcome to Voronoi Studio!</h1>
        <p className="lead text-center">
          Project Description: Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. Sed ut perspiciatis unde omnis iste natus error sit
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
          amet.
          <button id="lead-text-button" onClick={console.log("clicked")}>CLICKME!</button>
        </p>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.metmuseum.org/CRDImages/as/web-large/DP152319.jpg"
                className="d-block w-75 mx-auto"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <h6>
                  Some representative placeholder content for the first slide.
                </h6>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.metmuseum.org/CRDImages/as/web-large/DP152319.jpg"
                className="d-block w-75 mx-auto"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <h6>
                  Some representative placeholder content for the second slide.
                </h6>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.metmuseum.org/CRDImages/as/web-large/DP152319.jpg"
                className="d-block w-75 mx-auto"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <h6>
                  Some representative placeholder content for the third slide.
                </h6>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div id="front-page-voronoi">
          <h4 >See our voronois</h4>
          <button id="front-page-voronoi-button" onClick={console.log("clicked")}>CLICKME!</button>
        </div>
        <div id="enterBtn">
          <Button
            className="d-block mx-auto mt-4 btn-large col-6 rounded-0 "
            outline
            color="secondary"
          >
            Enter
          </Button>
        </div>
        <Footer />
      </div>
    ); 
}

export default Home;
