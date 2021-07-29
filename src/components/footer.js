import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return(
      <div className="h-20 w-full bg-yellow-100 bg-opacity-100">
        
         <Link to='/private'><p className="text-center">Home</p></Link>
        
      </div>
    )
  }
}

export default Footer;