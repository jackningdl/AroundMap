import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import { Home } from './Home';


export class Main extends React.Component {

	getLogin = () => {
		return this.props.isLoggedIn ? <Redirect to="/home"/> : <Login handleLogin={this.props.handleLogin}/>;
	}

	getHome = () => {
    	return this.props.isLoggedIn ? <Home/> : <Redirect to="/login"/>;
 	}


	getRoot = () => {
		return <Redirect to="/login" />;
	}


	render() {
		return (
			<div className="main">
				<Switch>
					<Route exact path="/" render={this.getRoot}/>
					<Route exact path="/login" component={this.getLogin}/>
					<Route path="/register" component={Register}/>
					<Route path="/home" render={this.getHome}/>
					<Route render={this.getRoot}/>
				</Switch>


			</div>
		)
	}
}