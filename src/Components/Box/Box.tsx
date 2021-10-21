import React from 'react';
// import classnames from 'classnames';
interface BoxProps {
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
	justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
	wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
	width?: number | string;
	height?: number | string;
	padding?: string;
	margin?: string;
	className?: string;
	onClick?: React.MouseEventHandler<React.ReactNode> | undefined;
}

export const Box: React.FC<BoxProps> = ({
	children,
	align,
	justify,
	direction,
	width,
	height,
	wrap,
	padding,
	margin,
	className,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className={className}
			style={{
				display: 'flex',
				flexFlow: `${direction || 'row'} ${wrap || 'wrap'}`,
				alignItems: align || 'center',
				justifyContent: justify || 'center',
				width: `${width}`,
				height: `${height}`,
				padding: padding,
				margin: margin,
			}}>
			{children}
		</div>
	);
};
