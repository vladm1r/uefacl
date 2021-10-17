import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../components/logo/logo';

import './navbar.scss'

const Navbar = () => {
	return (
		<aside className="navbar">
			<Logo />
			<nav className="menu">
				<li className="menu-item">
					<Link to="/" >Homepage</Link>
				</li>
				<li className="menu-item">
					<Link to="/players" >Players</Link>
				</li>
				<li className="menu-item">
					<Link to="/news" >News</Link>
				</li>
			</nav>
		</aside>
	)
}

export default Navbar
