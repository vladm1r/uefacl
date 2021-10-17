import React from 'react';

import Title from '../../components/title/title';
import Loader from '../../components/loader/loader';
import { useGetPlayersQuery } from '../../services/football-api';

import './players.scss';

const Players = () => {
	const { data: playersData, isFetching } = useGetPlayersQuery('2');

	const players = playersData?.response;

	console.log(players);

	if (isFetching) return (
		<Loader />
	);

	return (
		<div className="players">
			<Title title="Top players" />
			<ul className="players-list">
				{players.map(item => (
					<li key={item?.player?.id} className="players-item">
						<div className="players-item-body">
							<div className="players-item-img-cont">
								<img src={item?.player?.photo} alt="football" />
							</div>
							<h3 className="players-item-name">{item?.player?.name}</h3>
							<p className="players-item-position">{item?.statistics[0]?.games?.position}</p>
							<div className="players-item-team">
								<img src={item?.statistics[0]?.team?.logo} alt="club" className="players-item-team-logo" />
								<p className="players-item-team-name">{item?.statistics[0]?.team?.name}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Players;
