import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './Menu.module.scss';
import { Box } from '..';
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc';
import { menuItems } from '../../TextContent';

export const Menu = () => {
	const [isOpen, setIsOpen] = useState(true);

	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<aside className={classnames(styles.menu, isOpen && styles.menuIsOpen)}>
			<Box direction="column" align="flex-start" className={styles.menuItemsBox}>
				{menuItems.map((menuItem) => (
					<Link key={menuItem.label} to={menuItem.link} className={styles.menuItem}>
						{menuItem.icon ? menuItem.icon() : <VscArrowRight />}
						{isOpen && menuItem.label}
					</Link>
				))}
			</Box>
			<Box className={styles.arrowIconBox} onClick={handleIsOpen}>
				{isOpen ? <VscArrowLeft /> : <VscArrowRight />}
			</Box>
		</aside>
	);
};
