import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";

class Signup extends Component {
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
    this.props.signup({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (

<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold font-Otomanopee ">Sign Up</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input autoComplete="off" id="email" name="username" value={username} type="text" onChange={this.handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-Summer">User Name</label>
						</div>
						<div className="relative">
							<input autoComplete="off" id="password" name="password" value={password} type="password" onChange={this.handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div className="relative">
							<button onClick={this.handleFormSubmit} className="bg-red-500 text-white rounded-md px-2 py-1 font-mono">Submit</button>
						</div>
            <p className="font-mono">Already have an account? Click in Login</p>
            {/* <Link to={"/login"}>Login</Link> */}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>



      // <div>
      //   <form onSubmit={this.handleFormSubmit}>
      //     <label>Username:</label>
      //     <input
      //       type="text"
      //       name="username"
      //       value={username}
      //       onChange={this.handleChange}
      //     />
      //     <label>Password:</label>
      //     <input
      //       type="password"
      //       name="password"
      //       value={password}
      //       onChange={this.handleChange}
      //     />
      //     <input type="submit" value="Signup" />
      //   </form>
      //   <p>
      //     Already have account?
      //     <Link to={"/login"}> Login</Link>
      //   </p>
      // </div>
    );
  }
}

export default withAuth(Signup);
