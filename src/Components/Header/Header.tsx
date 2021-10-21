import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import UserIcon from '../Icons/UserIcon';
import { Box } from '..';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.home}>
				Kanbanator
			</Link>
			<Box className={styles.userIconBox}>
				<UserIcon />
			</Box>
		</header>
	);
};

export default Header;
