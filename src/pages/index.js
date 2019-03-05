import React, { Component } from "react";
import "./gooey.css";
import "./datavisuals.css";
import "./photosites.css";
import bust from "../images/tears.jpg";

class index extends Component {
  state = {
    sizeOf: {
      tears: "little",
      ears: "little",
      music: "little",
      plants: "little",
      councils: "little",
      butts: "little",
      trains: "little",
      choirs: "little"
    },
    elements: [
      "tears",
      "ears",
      "trains",
      "butts",
      "councils",
      "music",
      "plants",
      "choirs"
    ]
  };

  grow(bigElement) {
    console.log(this.state);
    let newSizes = {};
    this.state.elements.forEach(el => {
      el === bigElement ? (newSizes[el] = "big") : (newSizes[el] = "tiny");
    });
    this.setState({ sizeOf: newSizes });
  }

  shrink() {
    let newSizes = {};
    this.state.elements.forEach(el => {
      newSizes[el] = "little";
    });
    this.setState({ sizeOf: newSizes });
  }

  render() {
    return (
      <div className="big-box">
        <section
          className={`${this.state.sizeOf.tears}-tears-box`}
          onMouseEnter={() => {
            this.grow("tears");
          }}
          onMouseLeave={() => {
            this.shrink("tears");
          }}
          style={{ left: this.state.ears ? "400px" : null }}
        >
          <svg viewBox="0 0 345 220" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <pattern
                id="img1"
                patternUnits="userSpaceOnUse"
                width="100%"
                height="650"
              >
                <image
                  class="twombly"
                  xlinkHref={bust}
                  x="-30"
                  y="-30"
                  width="664"
                  height="759"
                />
              </pattern>
            </defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            />
            <path fill="url(#img1)" stroke="coral" strokeWidth="2" />
          </svg>
        </section>

        <section
          className={`${this.state.sizeOf.councils}-councils-box`}
          onMouseEnter={() => {
            this.grow("councils");
          }}
          onMouseLeave={() => {
            this.shrink("councils");
          }}
        >
          <svg
            viewBox="0 0 180 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="teal" stroke="coral" strokeWidth="5" />
          </svg>
        </section>

        <section
          className={`${this.state.sizeOf.ears}-ears-box`}
          onMouseEnter={() => {
            this.grow("ears");
          }}
          onMouseLeave={() => {
            this.shrink("ears");
          }}
        >
          <svg
            viewBox="0 0 286 190"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="coral" />
          </svg>
        </section>

        <section
          className={`${this.state.sizeOf.music}-music-box`}
          onMouseEnter={() => {
            console.log(this.state.sizeOf, "musicmusicmusicKDKDK");
            this.grow("music");
          }}
          onMouseLeave={() => {
            this.shrink("music");
          }}
        >
          <svg
            viewBox="0 0 225 160"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="coral" />
          </svg>
        </section>

        <section
          className={`${this.state.sizeOf.trains}-trains-box`}
          onMouseEnter={() => {
            this.grow("trains");
          }}
          onMouseLeave={() => {
            this.shrink("trains");
          }}
        >
          <svg
            viewBox="0 0 286 129"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="coral" />
          </svg>
        </section>

        <section
          className={`${this.state.sizeOf.butts}-butts-box`}
          onMouseEnter={() => {
            this.grow("butts");
          }}
          onMouseLeave={() => {
            this.shrink("butts");
          }}
        >
          <svg
            viewBox="0 0 200 111"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="coral" />
          </svg>
        </section>

        <section
          className={`${this.state.sizeOf.plants}-plants-box`}
          onMouseEnter={() => {
            this.grow("plants");
          }}
          onMouseLeave={() => {
            this.shrink("plants");
          }}
        >
          <svg
            viewBox="0 0 200 111"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="coral" />
          </svg>
        </section>

        <section
          className={`${this.state.sizeOf.choirs}-choirs-box`}
          onMouseEnter={() => {
            this.grow("choirs");
          }}
          onMouseLeave={() => {
            this.shrink("choirs");
          }}
        >
          <svg
            viewBox="0 0 200 111"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="DarkSeaGreen" />
          </svg>
        </section>
      </div>
    );
  }
}

export default index;
