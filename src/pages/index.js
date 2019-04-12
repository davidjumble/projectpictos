import React, { Component } from "react";
import "./stylish/gooey.css";
import "./stylish/datavisuals.css";
import "./stylish/photosites.css";
import "./stylish/flowers.css";
import "./stylish/smallblobs.css"
import Flowers from "./smallBlobs/Flowers";
import SmallBlobs from "./smallBlobs/SmallBlobs";
import bust from "../images/tears.jpg";
import movements from "../movements/thisIsHowWeMoveIt"
class index extends Component {
  state = {
    biggie: '',
    color: "hotPink",
    sizeOf: {
      tears: "little",
      ears: "little",
      music: "little",
      plants: "little",
      councils: "little",
      butts: "little",
      trains: "little",
      choirs: "little",
      about: "little"
    },
    elements: [
      "tears",
      "ears",
      "trains",
      "butts",
      "councils",
      "music",
      "plants",
      "choirs",
      "about"
    ]
  };

  grow(bigElement) {
    console.log(this.state);
    let newSizes = {};
    this.state.elements.forEach(el => {
      el === bigElement ? (newSizes[el] = "big") : (newSizes[el] = "tiny");
    });
    this.setState({ sizeOf: newSizes, color: "coral", biggie: bigElement });
  }

  shrink() {
    let newSizes = {};
    this.state.elements.forEach(el => {
      newSizes[el] = "little";
    });
    this.setState({ sizeOf: newSizes, biggie: null });
  }

  render() {
    var blackNwhite = {
      webkitFilter: "grayscale(100%)"
    };
    return (
      <div className="big-box">

        {/* <SmallBlobs /> */}
        <Flowers />

        {/* ///////////////TEARS////////////////////// */}

        <section
          className={`${this.state.sizeOf.tears}-tears-box`}
          onMouseEnter={() => {
            this.grow("tears");
          }}
          onMouseLeave={() => {
            this.shrink("tears");
          }}
          // style={{ left: this.state.ears ? "400px" : null }}
          style={movements.tears[this.state.biggie]}
        >
          <svg viewBox="-2 -2 345 220" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <pattern
                id="img1"
                patternUnits="userSpaceOnUse"
                width="100%"
                height="650"
              >
                <image
                  className=""
                  style={blackNwhite}
                  xlinkHref={bust}
                  x="-40"
                  y="-30"
                  width="664"
                  height="759"
                  filter="grayscale(100%)"
                />
              </pattern>
            </defs>

            <path fill="url(#img1)" stroke="coral" strokeWidth="4" />
          </svg>
        </section>

        {/* //////////COUNCILS////////////// */}

        <section
          className={`${this.state.sizeOf.councils}-councils-box`}
          onMouseEnter={() => {
            this.grow("councils");
          }}
          onMouseLeave={() => {
            this.shrink("councils");
          }}
          style={movements.councils[this.state.biggie]}
        >
          <g
          // id="fade"
          >
            <svg
              viewBox="-3 -3 140 60"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path fill={this.state.color} stroke="teal" strokeWidth="4" />
            </svg>
          </g>
        </section>

        {/* ///////////////EARS//////////////////// */}

        <section
          className={`${this.state.sizeOf.ears}-ears-box`}
          onMouseEnter={() => {
            this.grow("ears");
          }}
          onMouseLeave={() => {
            this.shrink("ears");
          }}
          style={movements.ears[this.state.biggie]}
        >
          <svg
            viewBox="-3 -3 164 107"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="grey" stroke="hotPink" strokeWidth="5" />
          </svg>
        </section>

        {/* ///////////MUSIC/////////////// */}

        <section
          className={`${this.state.sizeOf.music}-music-box`}
          onMouseEnter={() => {
            console.log(this.state.sizeOf, "musicmusicmusicKDKDK");
            this.grow("music");
          }}
          onMouseLeave={() => {
            this.shrink("music");
          }}
          style={movements.music[this.state.biggie]}
        >
          <svg
            viewBox="-4 -4 235 165"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="grey" stroke="hotpink" strokeWidth="10" />
          </svg>
        </section>

        {/* ///////TRAINS/////////// */}

        <section
          className={`${this.state.sizeOf.trains}-trains-box`}
          onMouseEnter={() => {
            this.grow("trains");
          }}
          onMouseLeave={() => {
            this.shrink("trains");
          }}
          style={movements.trains[this.state.biggie]}
        >
          <svg
            viewBox="-3 -3 168 79"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="coral" stroke="teal" strokeWidth="4" />
          </svg>
        </section>

        {/* ////////BUTTS/////////////////////////////// */}
        <section
          className={`${this.state.sizeOf.butts}-butts-box`}
          onMouseEnter={() => {
            this.grow("butts");
          }}
          onMouseLeave={() => {
            this.shrink("butts");
          }}
          style={movements.butts[this.state.biggie]} >

          <svg
            viewBox="-3 -3 200 117"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="grey" stroke="hotpink" strokeWidth="7" />
          </svg>
        </section>

        {/* ///////PLANTS//////// */}

        <section
          className={`${this.state.sizeOf.plants}-plants-box`}
          onMouseEnter={() => {
            this.grow("plants");
          }}
          onMouseLeave={() => {
            this.shrink("plants");
          }}
          style={movements.plants[this.state.biggie]}
        >
          <svg
            viewBox="-3 -3 165 116"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="coral" stroke="hotpink" strokeWidth="4" />
          </svg>
        </section>

        {/* /////CHOIRS////// */}

        <section
          className={`${this.state.sizeOf.choirs}-choirs-box`}
          onMouseEnter={() => {
            this.grow("choirs");
          }}
          onMouseLeave={() => {
            this.shrink("choirs");
          }}

          style={movements.choirs[this.state.biggie]}
        >
          <svg
            viewBox="-3 -3 132 112"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="DarkSeaGreen" stroke="gold" strokeWidth="3px" />
          </svg>
        </section>

        {/* ////////ABOUT////////// */}

        <section
          className={`${this.state.sizeOf.about}-about-box`}
          onMouseEnter={() => {
            console.log(this.state.sizeOf, "aboutaboutaboutKDKDK");
            this.grow("about");
          }}
          onMouseLeave={() => {
            this.shrink("about");
          }}
          style={movements.about[this.state.biggie]}
        >
          <svg
            viewBox="-4 -4 143 83"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="grey" stroke="hotpink" strokeWidth="5" />
          </svg>
        </section>
      </div>
    );
  }
}

export default index;
