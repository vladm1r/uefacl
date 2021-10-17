import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './app.scss';

import Navbar from './containers/navbar/navbar';
import Standings from './containers/standings/standings';
import Players from './containers/players/players';
import News from './containers/news/news';

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<main className="main">
				<Switch>
					<Route exact path="/">
						{/* <Standings /> */}
					</Route>
					<Route path="/players">
						{/* <Players /> */}
					</Route>
					<Route path="/news">
						<News />
					</Route>
				</Switch>
			</main>
		</div>
	)
}

export default App;
