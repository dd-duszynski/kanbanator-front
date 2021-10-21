import React from 'react';
import { Box } from '../../Components';
import styles from './Templates.module.scss';

interface TemplateItem {
	template_category: string;
	template_description: string;
	template_id: number;
	template_image_url: string;
	template_link: string;
	template_title: string;
}
interface TemplatesViewProps {
	template: any;
}

const TemplatesView: React.FC<TemplatesViewProps> = ({ template }) => {
	console.log('template', template);

	return (
		<section className={styles.Templates}>
			<header>
				<h1>Templates</h1>
			</header>
			<Box justify="flex-start">OK</Box>
		</section>
	);
};

export default TemplatesView;
