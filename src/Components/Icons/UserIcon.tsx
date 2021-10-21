import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import styles from './UserIcon.module.scss';

const UserIcon = () => {
	return (
		<div className={styles.UserIcon}>
			<FaUserAlt />
		</div>
	);
};

export default UserIcon;
