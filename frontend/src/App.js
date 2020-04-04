import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import axios from 'axios';

import { Dashboard } from './components/layout/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';
import Axios from 'axios';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}
axios.defaults.baseURL = 'http://pandemicmemorial.com:7000';
console.log('axios default' + axios.defaults);
const App = () => {

	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<div className="page-wrapper">
					<Alert />
					<Route exact path="/" component={Dashboard} />
					<section className="container">
						<Switch>
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
						</Switch>
					</section>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
