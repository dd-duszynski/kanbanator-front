import React from 'react';
import { Menu, Header } from '..';
import styles from './Layout.module.scss';

export const Layout: React.FC = ({ children }) => {
	// const store = useSelector((state: RootState) => state);
	// console.log('store', store);

	return (
		<div className={styles.Layout}>
			<Header />
			<Menu />
			<main className={styles.main}>{children}</main>
			{/* <footer className={styles.aside}>Footer</footer> */}
		</div>
	);
};
