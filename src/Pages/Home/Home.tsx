import React from 'react';
import kanbanA from '../../assets/kanbanA.svg';
import kanbanB from '../../assets/kanbanB.svg';
import kanbanC from '../../assets/kanbanC.svg';
import { Typography, Box, Image } from '../../Components';
import styles from './Home.module.scss';

const Home: React.FC = () => {
	return (
		<section>
			<Box wrap="nowrap">
				<Box justify="flex-start">
					<Typography type="h1">Visualize your work with Kanban.</Typography>
					<Typography type="p">
						The Kanban board gives you an excellent overview of your current work situation. Visualizing work in a
						team environment simplifies communication and leads to improved productivity.
					</Typography>
				</Box>
				<Image imgSrc={kanbanA} title="Kanban A" className={styles.img} />
			</Box>

			<Box wrap="nowrap">
				<Image imgSrc={kanbanC} title="Kanban C" className={styles.img} />
				<Box justify="flex-start">
					<Typography type="h1">Stop starting. Start finishing.</Typography>
					<Typography type="p">
						Limit your work-in-progress and get more done. Get a better flow on your Kanban board by focusing on
						completing tasks instead of starting new tasks.
					</Typography>
				</Box>
			</Box>

			<Box wrap="nowrap">
				<Box justify="flex-start">
					<Typography type="h1">Time tracking</Typography>
					<Typography type="p">
						Track the time that you spend on your tasks. Use the Pomodoro technique timer or a simple stopwatch
						timer. Alternatively, you can log your time manually.
					</Typography>
				</Box>
				<Image imgSrc={kanbanB} title="Kanban B" className={styles.img} />
			</Box>
		</section>
	);
};

export default Home;
