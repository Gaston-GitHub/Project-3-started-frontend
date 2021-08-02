import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';
import WineDetails from './components/wine/WineDetails';
import WineList from './components/wine/WineList';
import AddWine from './components/wine/AddWine';
import EditWine from './components/wine/EditWine';



class App extends Component {
	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<div>
				<Switch>
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/private" component={Private} />
					<PrivateRoute exact path="/wine" component={WineList} />
					<PrivateRoute exact path="/wine/create" component={AddWine} /> 
					<PrivateRoute exact path="/wine/details/:id" component={WineDetails} />
					<PrivateRoute exacth path="/wine/edit/:id" component={EditWine} />
				</Switch>
			</div>
			
		);
	}
}

export default withAuth(App);
