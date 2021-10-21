import React from 'react';
import classnames from 'classnames';
import styles from './Image.module.scss';

interface ImageProps {
	imgSrc: string;
	title: string;
	className?: string;
}

export const Image: React.FC<ImageProps> = ({ imgSrc, title, className }) => {
	return (
		<img
			src={imgSrc}
			className={classnames(styles.Image, className)}
			alt={title}
			style={{ width: '100%', borderRadius: '0.5rem' }}
		/>
	);
};
