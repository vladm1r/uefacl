import React from 'react';
import { useGetStandingsQuery } from '../../services/football-api';

import Title from '../../components/title/title';
import Loader from '../../components/loader/loader';

import './standings.scss';

const Standings = () => {
	const { data: standingsData, isFetching } = useGetStandingsQuery('2');

	const standings = standingsData?.response[0]?.league?.standings;

	if (isFetching) return (
		<Loader />
	);

	return (
		<div className="standings">
			<Title title="Standings" />
			<ul className="standings-group-list">
				{standings.map(group => (
					<li key={group[0]?.group} className="group-item">
						<div className="group-item-body">
							<div className="group-item-header">
								<h3 className="group-item-title">{group[0]?.group}</h3>
							</div>
							<table className="group-item-table">
								<tbody>
									<tr>
										<td></td>
										<td>Played</td>
										<td>Won</td>
										<td>Drawn</td>
										<td>Lost</td>
										<td>Points</td>
									</tr>
									{group?.map(item => (
										<tr key={item?.team?.id}>
											<td>
												{item?.rank}
												<img src={item?.team?.logo} alt="club" className="group-item-team-logo" />
												{item?.team?.name}
											</td>
											<td>{item?.all?.played}</td>
											<td>{item?.all?.win}</td>
											<td>{item?.all?.draw}</td>
											<td>{item?.all?.lose}</td>
											<td>{item?.points}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Standings
