import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {
	render() {
		const { user, isLoggedIn, logout } = this.props;
		return (
			
				<div className="h-20 w-full bg-yellow-100 bg-opacity-100 flex items-center px-4" >
					<button className="text-black font-mono"  onClick={logout}>Logout</button>

					<div className="w-full h-full flex justify-end items-center">
			 			{isLoggedIn ? (
			 				<>
								<p className="text-black font-mono md:font-mono text-right">User: {user.username}</p>
		
								
			 				</>
			 			) : (
			 				<>
							 <div className="flex h-full items-center  hover:bg-black hover:bg-opacity-50">
                 {/* <div className="mx-4 text-white">Login</div> */}
                 <div className=" h-8 w-px bg-gray-300"></div>
									<Link className="mx-4 text-black font-mono" to="/login">Login</Link>
            	 </div>
							 <div className="flex h-full items-center  hover:bg-black hover:bg-opacity-50">
                	{/* <div className="mx-4 text-white">Opcion</div> */}
                	<div className=" h-8 w-px bg-gray-300"></div>
									<Link className="mx-4 text-black font-mono" to="/signup">Signup</Link>
              	</div>
							
								<div className="flex h-full items-center  hover:bg-black hover:bg-opacity-50">
                 <div className="h-8 w-px bg-gray-300"></div>
								 
								
								</div>
							
			 				
			 					
			 				</>
			 			)}
						
				 </div>
				 
			 </div>
		
			
		);
	}
}

export default withAuth(Navbar);
