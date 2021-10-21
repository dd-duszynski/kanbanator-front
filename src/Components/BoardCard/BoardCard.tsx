import React from 'react';
import { Box } from '..';
import styles from './BoardCard.module.scss';
import { MdFavorite } from 'react-icons/md';
import { Image, Typography } from '..';
import { Link } from 'react-router-dom';

interface BoardCardProps {
	title: string;
	description: string;
	imgSrc: string;
	link: string;
	type: 'template' | 'board';
}

export const BoardCard: React.FC<BoardCardProps> = ({ title, description, imgSrc, link, type }) => {
	return (
		<Box direction="column" align="flex-start" justify="flex-start" className={styles.BoardCard}>
			<Typography type="h1">{title}</Typography>
			<Link to={type === 'template' ? `templates/${link}` : `boards/${link}`}>
				<Image imgSrc={imgSrc} title={title} className={styles.Img} />
			</Link>
			<Typography type="p">{description}</Typography>
			<MdFavorite />
		</Box>
	);
};
