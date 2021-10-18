import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../components/logo/logo';

import './navbar.scss'

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(undefined);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 1024) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);


	return (
		<aside className="navbar">
			<Link to="/" ><Logo /></Link>
			<button className="menu-btn" onClick={() => setActiveMenu(!activeMenu)}></button>
			{activeMenu &&
				<nav className="menu">
					<ul className="menu-list">
						<li className="menu-item">
							<Link to="/" >Standings</Link>
						</li>
						<li className="menu-item">
							<Link to="/players" >Top players</Link>
						</li>
						<li className="menu-item">
							<Link to="/news" >News</Link>
						</li>
					</ul>
				</nav>}
		</aside>
	)
}

export default Navbar
