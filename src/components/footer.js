import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return(
      <div className="h-20 w-full bg-black">
         <Link to='/private'><p className="text-white items-center text-center py-5">Home</p></Link>
      </div>
    )
  }
}

export default Footer;