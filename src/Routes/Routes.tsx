import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Spinner } from '../Components';
import Home from '../Pages/Home/Home';
import Boards from '../Pages/Boards/Boards';
import Board from '../Pages/Board/Board';
// const Templates = React.lazy()
import TemplatesContainer from '../Pages/Templates/TemplatesContainer';
import TemplateContainer from '../Pages/Template/TemplateContainer';
import Settings from '../Pages/Settings/Settings';

const Routes = () => {
	const routes = (
		<Switch>
			<Route path="/settings">
				<Settings />
			</Route>
			<Route path="/templates/:templateID">
				<TemplateContainer />
			</Route>
			<Route path="/templates">
				<TemplatesContainer />
			</Route>
			<Route path="/boards/:boardID">
				<Board />
			</Route>
			<Route path="/boards">
				<Boards />
			</Route>
			<Route path="/">
				<Home />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
	return (
		<BrowserRouter>
			<Layout>
				<Suspense fallback={<Spinner />}>{routes}</Suspense>
			</Layout>
		</BrowserRouter>
	);
};
export default Routes;
