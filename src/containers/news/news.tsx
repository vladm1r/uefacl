import React, { useState } from 'react';
import moment from 'moment';

import Title from '../../components/title/title';
import Loader from '../../components/loader/loader';
import { useGetNewsQuery } from '../../services/news-api';
import blankImg from '../../assets/images/blank.jpg'

import './news.scss';

type NewsProps = {
	simplified?: boolean,
}

const News = ({ simplified = false }: NewsProps) => {
	const [newsCategory, setNewsCategory] = useState('UEFA champions');
	const { data: news } = useGetNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

	if (!news?.value) return (
		<Loader />
	);

	return (
		<div className="news">
			<Title title="News" />
			<ul className="news-list">
				{news.value.map((news, i) => (
					<li key={i} className="news-item">
						<div className="news-item-body">
							<a href={news.url} target="_blank" rel="noreferrer">
								<div className="news-item-image-container">
									<img src={news?.image?.thumbnail?.contentUrl || blankImg} alt="news" />
								</div>
								<h3 className="news-item-title">{news.name}</h3>
								<p className="news-item-description">
									{news.description.length > 100
										? `${news.description.substring(0, 100)}...`
										: news.description
									}
								</p>
								<div className="news-item-footer">
									<div className="news-item-provider">
										<img src={news.provider[0]?.image?.thumbnail?.contentUrl || blankImg} alt="" className="news-item-provider-image" />
										<p className="news-item-provider-name">{news.provider[0]?.name}</p>
									</div>
									<div className="news-item-date">{moment(news.datePublished).format("MMM Do h:mm")}</div>
								</div>
							</a>
						</div>
					</li>
				))}
			</ul>
		</div>

	)
}

export default News
