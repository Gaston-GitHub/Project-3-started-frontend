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


<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 bg-local bg-sign-up md:bg-scroll md:bg-contain bg-auto">      
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-transparent shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl text-gray-700  font-semibold">Login</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
						<div className="relative">
							<input autoComplete="off" id="user name" name="username" value={username} type="text" onChange={this.handleChange} className="placeholder-transparent w-full h-10 text-gray-700 focus:outline-none" placeholder="user name" />
							<label htmlFor="username" className="absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm text-gray-700">User name!</label>
						</div>
						<div className="relative">
							<input autoComplete="off" id="password" name="password" value={password} type="password" onChange={this.handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Pas sword!</label>
						</div>
						<div className="relative">
							<button onClick={this.handleFormSubmit} className="bg-red-900 text-white rounded-md px-2 py-1 font-mono">Submit</button>
						</div>
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

