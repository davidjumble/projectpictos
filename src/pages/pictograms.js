import React, { Component } from 'react';
import Eye from "./singlePictos/Eye.js"
import About from "./singlePictos/About.js"
import Choirs from "./singlePictos/Choirs.js"
import English from "./singlePictos/English.js"
import Jam from "./singlePictos/Jam.js"
import Ears from "./singlePictos/Ears.js"
import Free from "./singlePictos/Free.js"
import Books from "./singlePictos/Books.js"
import Gooey from "./singlePictos/Gooey.js"
import Planets from "./singlePictos/Planets.js"
class Pictograms extends Component {

  state = {
    about: '',
    eye: '',
    choirs: '',
    english: '',
    jam: '',

    ears: '',
    free: '',
    books: '',
    gooey: '',
    planets: '',

  }

  change(picto) {
    console.log(picto)
    console.log(this.state, 'unchanged')

    this.state[picto] === '' ?
      this.setState({ [picto]: 'changed' }) :
      this.setState({ [picto]: '' })

    console.log(this.state, 'CHANGEDhduhfjvnfejv')

  };



  render() {

    return (

      < section className='all-pictos' >

        <div className="about-box" onClick={() => { this.change('about') }} >
          <About about={this.state.about} />
        </div>

        <div className="eye-box" onClick={() => { this.change('eye') }} >
          <Eye eye={this.state.eye} />
        </div>

        <div className="choirs-box" onClick={() => { this.change('choirs') }} >
          <Choirs eye={this.state.eye} />
        </div>

        <div className="english-box" onClick={() => { this.change('english') }} >
          <English english={this.state.english} />
        </div>

        <div className="jam-box" onClick={() => { this.change('jam') }} >
          <Jam jam={this.state.jam} />
        </div>

        <div className="ears-box" onClick={() => { this.change('ears') }} >
          <Ears ears={this.state.ears} />
        </div>

        <div className="free-box" onClick={() => { this.change('free') }} >
          <Free free={this.state.free} />
        </div>

        <div className="books-box" onClick={() => { this.change('books') }} >
          <Books books={this.state.books} />
        </div>

        <div className="gooey-box" onClick={() => { this.change('gooey') }} >
          <Gooey gooey={this.state.gooey} />
        </div>

        <div className="planets-box" onClick={() => { this.change('planets') }} >
          <Planets planets={this.state.planets} />
        </div>






      </section>
    );
  }
}

export default Pictograms