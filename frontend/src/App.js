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
import { loadArticles } from './actions/article';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = 'https://api.pandemicmemorial.com';
} else {
	axios.defaults.baseURL = 'http://localhost:7000';
}

const App = () => {

	useEffect(() => {
		store.dispatch(loadUser());
		store.dispatch(loadArticles());
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
