import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/reducers/rootReducer';
import { singleTemplateFetch } from '../../Store/actions/templates';
import { useParams } from 'react-router';
import TemplateView from './TemplateView';
// const TemplateView = React.lazy(() => import('./TemplateView'));

const TemplateContainer: React.FC = () => {
	const dispatch = useDispatch();
	const { templateID } = useParams<{ templateID?: string }>();
	const { singleTemplate } = useSelector((state: RootState) => state.templates);
	console.log('singleTemplates', singleTemplate);

	useEffect(() => {
		dispatch(singleTemplateFetch(templateID));
	}, [dispatch, templateID]);

	return <TemplateView template={singleTemplate} />;
};

export default TemplateContainer;
