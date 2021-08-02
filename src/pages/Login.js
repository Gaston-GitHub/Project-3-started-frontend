import React, { Component } from "react";
import { withAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({
      username, 
      password
    })
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = event => {
    this.handleFormSubmit()
  }

  render() {
    const { username, password } = this.state;
    return (
      
<div className="p-10 min-h-screen justify-center bg-black">      
	<div className="relative py-6 sm:max-w-lg sm:mx-auto">
		<div className="relative px-4">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-xl text-white text-center">Login</h1>
				</div>
				<div className="py-8 leading-10 space-y-6">
					<div className="relative">
            <label htmlFor="username" className="left-0 peer-focus:text-gray-600 text-white">User name</label>
						<input autoComplete="off" id="user name" name="username" value={username} type="text" onChange={this.handleChange} className="text-sm py-2 h-8 w-full border-b-2 focus:outline-none text-gray-700" placeholder="user name" />
					</div>
					<div className="relative">
            <label htmlFor="password" className="left-0 peer-focus:text-gray-600 text-white">Password</label>
						<input autoComplete="off" id="password" name="password" value={password} type="password" onChange={this.handleChange} className="text-sm py-2 h-8 w-full border-b-2 focus:outline-none" placeholder="password" />	
					</div>
					<div className="relative">
							<button onClick={this.handleFormSubmit} className="bg-gray-50 text-black px-2 py-1 text-sm">Submit</button>
					</div>
            <p className="text-white text-center py-4">Register if you do not have an account</p>
            <Link to="/signup"><p className="text-white text-center">Sign up</p></Link>
				</div>
			</div>
		</div>
	</div>
</div>
    );
  }
}

export default withAuth(Login);

