import React from 'react';
import styles from './Typography.module.scss';
import classnames from 'classnames';

interface TypographyProps {
	type: 'h1' | 'h2' | 'p';
	className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ type, children, className }) => {
	let renderResult;
	switch (type) {
		case 'h1':
			renderResult = <h1 className={classnames(styles.h1, className)}>{children}</h1>;
			break;
		case 'h2':
			renderResult = <h2 className={classnames(styles.h2, className)}>{children}</h2>;
			break;
		case 'p':
			renderResult = <p className={classnames(styles.p, className)}>{children}</p>;
			break;
	}
	return renderResult;
};
