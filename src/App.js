import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Time from './components/Time.js'

import Dashboard from './components/Dashboard.js'
import Identification from './components/Identification.js'
import Personal from './components/Personal.js'

import './App.css';

library.add(faBars, faBell)

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: true
		};

		this.toggleMenu = this.toggleMenu.bind(this);
	}
	toggleMenu() {
		this.setState({
			visible: !this.state.visible
		});
	}
	render() {
		const { visible } = this.state;
		return (
			<div className="main">
				<header className="header">
					<div className="header-left">
						<button className="menu-toggle" onClick={this.toggleMenu}><FontAwesomeIcon icon="bars" /></button>
					</div>
					<div className="header-right">
						<div className="time-container">
							<Time />
						</div>
						<button className="notes-toggle">
							<FontAwesomeIcon icon={['far', 'bell']} />
						</button>
					</div>
				</header>
				<div className="all-content">
					<div className={(visible && 'show left_menu') || 'left_menu'}>
						<nav>
							<NavLink to="/" exact activeClassName="active">Dashboard</NavLink>
							<NavLink to="/identification" activeClassName="active">Identification</NavLink>
							<NavLink to="/personal" activeClassName="active">Personal Details</NavLink>
						</nav>
					</div>
					<div className={(visible && 'not_full right-content') || 'right-content'}>
						<Switch>
							<Route path="/" exact component={Dashboard} />
							<Route path="/identification" component={Identification} />
							<Route path="/personal" component={Personal} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
