import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import logo from '../images/imageonline-co-transparentimage (10).png';


class Private extends Component {
	render() {
			const { user, isLoggedIn, logout } = this.props;
		return (

<div className="p-5 min-h-screen justify-center bg-black"> 
	<button className="bg-gray-50 text-black px-2 py-1 text-sm" onClick={logout}>Logout</button>     
		<div className="relative py-6 sm:max-w-lg sm:mx-auto">
			<div className="relative px-4">
				<div>
					{ isLoggedIn ? (
						<><p className="text-white text-2xl text-center">Welcome: {user.username}</p></>
					): (
					<>
					</>
					)}
					<div className="py-20">
					<Link to="/wine/create"><p className="text-white text-xl text-center">Save your wine</p></Link>
					<br></br>
					<Link to="/wine"><p className="text-white text-center text-xl">Wine list</p></Link> 
					<img className="py-20" src={logo} alt=""></img>
					</div>
			 </div>		
		</div>
	</div>
</div>		
		);
	}
}

export default withAuth(Private);
