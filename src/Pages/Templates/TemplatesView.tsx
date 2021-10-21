import React from 'react';
import { BoardCard, Box } from '../../Components';
import styles from './Templates.module.scss';

interface TemplatesItem {
	template_category: string;
	template_description: string;
	template_id: number;
	template_image_url: string;
	template_link: string;
	template_title: string;
}
interface TemplatesViewProps {
	templates: TemplatesItem[];
}

const TemplatesView: React.FC<TemplatesViewProps> = ({ templates }) => {
	const renderResult =
		templates &&
		templates.map((item) => (
			<BoardCard
				description={item.template_description}
				title={item.template_title}
				imgSrc={item.template_image_url}
				key={item.template_id}
				link={item.template_link}
				type="template"
			/>
		));

	return (
		<section className={styles.Templates}>
			<header>
				<h1>Templates</h1>
			</header>
			<Box justify="flex-start">{renderResult}</Box>
		</section>
	);
};

export default TemplatesView;
