import React, { Component } from "react";
import { withAuth } from "../providers/AuthProvider";

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


<div className="py-10 min-h-screen bg-gray-100 justify-center bg-sign-up bg-cover bg-no-repeat">      
	<div className="relative py-6 sm:max-w-xl sm:mx-auto">
		<div className="relative px-4">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl text-black font-semibold">Login</h1>
				</div>
				<div className="py-8 leading-10 space-y-6">
						<div className="relative">
            	<label htmlFor="username" className="left-0 peer-focus:text-gray-600 text-black">User name!</label>
							<input autoComplete="off" id="user name" name="username" value={username} type="text" onChange={this.handleChange} className="text-sm py-4 h-8 w-full focus:outline-none text-gray-700" placeholder="user name" />
						</div>
						<div className="relative">
              <label htmlFor="password" className="left-0 peer-focus:text-gray-600 text-black">Pas sword!</label>
							<input autoComplete="off" id="password" name="password" value={password} type="password" onChange={this.handleChange} className="text-sm py-4 h-8 w-full border-b-2 focus:outline-none" placeholder="Password" />	
						</div>
						<div className="relative">
							<button onClick={this.handleFormSubmit} className="bg-red-900 text-white rounded-md px-2 py-1 font-mono">Submit</button>
						</div>
				</div>
			</div>
		</div>
	</div>
</div>
    );
  }
}

export default withAuth(Login);

