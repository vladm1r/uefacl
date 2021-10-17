import React from 'react'

import loaderGif from '../../assets/images/loader.gif';

import './loader.scss';

const Loader = () => {
	return (
		<div className="loader-container">
			<img src={loaderGif} alt="loader" className="loader-gif" />
		</div>
	)
}

export default Loader
