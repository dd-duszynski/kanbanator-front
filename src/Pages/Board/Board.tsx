import React from 'react';
import { useParams } from 'react-router';
import { Layout } from '../../Components';

const Board: React.FC = () => {
	const boardParams = useParams();
	console.log(boardParams);

	return (
		// <Layout>
		<section>
			<article>
				<header>
					<h1>Board</h1>
				</header>
			</article>
		</section>
		// </Layout>
	);
};

export default Board;
