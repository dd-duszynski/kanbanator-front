import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/reducers/rootReducer';
import { templatesFetchAll } from '../../Store/actions/templates';
// import TemplatesView from './TemplatesView';
const TemplatesView = React.lazy(() => import('./TemplatesView'));

const TemplatesContainer: React.FC = () => {
	const dispatch = useDispatch();
	const { templates } = useSelector((state: RootState) => state.templates);

	useEffect(() => {
		dispatch(templatesFetchAll());
	}, [dispatch]);

	return <TemplatesView templates={templates} />;
};

export default TemplatesContainer;
