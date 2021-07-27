import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Private extends Component {

	render() {
		return (
			<div className="md:flex justify-center py-4 bg-bgPages">
				<h1 className="md:flex text-center text-4xl py-4">Wine Saver </h1>
					<br></br>
					<div className="md:flex">
						<Link to="/wine"><img className="object-contain h-24 w-full bg-bgPages"  src="/img/imageonline-co-transparentimage.png"></img></Link>
						<p className="text-center py-4">Save your favorite wine</p>
						<Link to="/wine"><img className=" md:float-right object-contain md:object-scale-down h-24 w-full" src="/img/imageonline-co-transparentimage (3).png"></img></Link>
						<p className="text-center py-2">List your wines</p>
						<Link to="/wine/:id"><img className="object-contain md:object-scale-down h-24 w-full" src="/img/imageonline-co-transparentimage (4).png"></img></Link>
						<p className="text-center py-4">If it not taste go od, delete it!</p>
						<Link to="wine/:id"><img className="object-contain md:object-scale-down h-16 w-full" src="/img/imageonline-co-transparentimage (11).png"></img></Link>
						<p className="text-center py-4">Found a bet ter wine? change it!</p>
						{/* <p className="text-center">Discover your taste profile.</p> */}
					</div>
			</div>
			
		);
	}
}

export default Private;
