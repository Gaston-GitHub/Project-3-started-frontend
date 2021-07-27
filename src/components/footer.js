import React, { Component } from 'react';
// import { Link } from 'reac-router-dom';

class Footer extends Component {
  render() {
    return(
      <div className="h-auto w-full bg-yellow-100 bg-opacity-100 flex items-center">
        <img className="object-contain md:object-scale-down h-20 w-full object-left" src="/img/imageonline-co-transparentimage (9).png"></img>
        <img className="object-contain md:object-scale-down h-20 w-full object-right" src="/img/imageonline-co-transparentimage (10).png"></img>
      </div>
    )
  }
}

export default Footer;