import React from 'react';
import logo from '../assets/logo.svg';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

export class Header extends React.Component {
	static propTypes = {
		// 帮助检查的
		isLoggedIn: PropTypes.bool.isRequired,
		handleLogout: PropTypes.func.isRequired,
	}

	render() {
		return (
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Around Application</h1>
			{
				this.props.isLoggedIn ?
           			<a className="logout" onClick={this.props.handleLogout}>
             			<Icon type="logout" />{' '}Logout
           			</a> : null
			}
			</header>
		)
	}
}

