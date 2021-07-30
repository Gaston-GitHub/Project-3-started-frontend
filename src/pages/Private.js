import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Private extends Component {

	render() {
		return (
			<div className="min-h-screen flex flex-col justify-center bg-bg-private bg-cover bg-no-repeat sm:bg-fixed">
					<div className="md:flex">
						<div className="">
							<Link to="/wine/create"><img className="object-contain h-24 w-full" src="/img/imageonline-co-transparentimage.png"></img></Link>
							<p className="text-center py-2 text-black">Add your favorite wine</p>
						</div>
						<br></br>
						<div className="">
							<Link to="/wine"><img className="object-contain h-24 w-full" src="/img/imageonline-co-transparentimage (3).png"></img></Link>
							<p className="text-center py-2 text-red">List your wines</p>
						</div>
						<br></br>
						<br></br>
					</div>
			</div>
			
		);
	}
}

export default Private;
