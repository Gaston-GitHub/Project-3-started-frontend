import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';
import WineDetails from './components/wine/WineDetails';
import WineList from './components/wine/WineList';
import AddWine from './components/wine/AddWine';



class App extends Component {
	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<div className="container">
				<h1>Basic React Authentication</h1>
				<Navbar />
				<Switch>
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/private" component={Private} />
					<PrivateRoute exact path="/wine" component={WineList} />
					<PrivateRoute exact path="/wine" component={AddWine} /> 
					<PrivateRoute exact path="/wine/:id" component={WineDetails} />
				</Switch>
			</div>
			
		);
	}
}

export default withAuth(App);
