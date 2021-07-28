import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return(
      <div className="h-20 w-full bg-yellow-100 bg-opacity-100 flex items-center">
        <div className="px-4 flex items-center">
         <Link to='/private'><p>Home</p></Link>
         <img className="object-contain md:object-scale-down h-20 w-full object-left" src="/img/imageonline-co-transparentimage (9).png"></img>
        </div>
        <div className="px-4 flex items-center">
          <Link to=''><p></p></Link>
          <img className="object-contain md:object-scale-down h-20 w-full object-right" src="/img/imageonline-co-transparentimage (10).png"></img>
        </div>
      </div>
    )
  }
}

export default Footer;