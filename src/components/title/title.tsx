import React from 'react'

import './title.scss';

type TitleProps = {
	title: string,
}

const Title = ({ title }: TitleProps) => {
	return (
		<h2 className="title">{title}</h2>
	)
}

export default Title
