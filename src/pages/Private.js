import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Private extends Component {

	render() {
		return (
			<div className="md:flex justify-center py-4 bg-bgPages">
					<div className="md:flex">
						<div className="">
							<Link to="/wine/create"><img className="object-contain h-24 w-full bg-bgPages"  src="/img/imageonline-co-transparentimage.png"></img></Link>
							<p className="text-center py-2 text-xs">Add your favorite wine</p>
						</div>
						<br></br>
						<div className="">
							<Link to="/wine"><img className=" md:float-right object-contain md:object-scale-down h-24 w-full" src="/img/imageonline-co-transparentimage (3).png"></img></Link>
							<p className="text-center py-2 text-xs">List your wines</p>
						</div>
						<br></br>
						<div>
							<Link to="/wine/:id"><img className="object-contain md:object-scale-down h-24 w-full" src="/img/imageonline-co-transparentimage (4).png"></img></Link>
							<p className="text-center py-4 text-xs">If it not taste go od, delete it!</p>
						</div>
						<br></br>
							<div>
								<Link to="/wine/edit/:id"><img className="object-contain md:object-scale-down h-16 w-full" src="/img/imageonline-co-transparentimage (11).png"></img></Link>
								<p className="text-center py-4 text-xs">Found a bet ter wine? change it!</p>
							</div>
					</div>
			</div>
			
		);
	}
}

export default Private;
