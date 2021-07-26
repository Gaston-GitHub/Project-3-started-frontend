import React, { Component } from 'react';


class Private extends Component {
	render() {
		return (
			<div className="md:flex justify-center py-4">
				<h1 className="md:flex text-center text-4xl">Wine Saver </h1>
					<br></br>
					<br></br>
					<p className="md:flex text-center">Save your favorites wines</p>
					<br></br>
					<p className="md:flex text-center">How it works</p>	
					<br></br>
					<p className="4xl text-left px-10">
						
					</p>
					<div className="md:flex-row">
						<img className="object-contain md:object-scale-down h-24 w-full"  src="/img/how it works 1.png"></img>
						<img className="object-contain md:object-scale-down h-24 w-full" src="/img/how it works 2.png"></img>
						<img className="object-contain md:object-scale-down h-24 w-full" src="/img/how it works 3.png"></img>
						<p className="text-center">Discover your taste profile.</p>
					</div>
			</div>
			
		);
	}
}

export default Private;
