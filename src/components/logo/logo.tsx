import React from 'react';

import './logo.scss';

import logoIcon from '../../assets/images/logo.png';

const Logo = () => {
	return (
		<div className="logo">
			<img className="logo-icon" src={logoIcon} alt="logo"></img>
			<p className="logo-text">ULC</p>
		</div>
	)
}

export default Logo
