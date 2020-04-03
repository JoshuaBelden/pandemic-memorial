import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';

import { Dashboard } from './components/layout/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

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
