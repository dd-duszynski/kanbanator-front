import { templatesTypes } from './actionTypes';

// ALL TEMPLATES ACTIONS -------------------------------------------------
export const templatesFetchAll = () => {
	return {
		type: templatesTypes.TEMPLATE_FETCH_ALL,
	};
};
export const templatesFetchSuccess = (templates) => {
	return {
		type: templatesTypes.TEMPLATES_FETCH_SUCCESS,
		templates: templates,
	};
};
export const templatesFetchFail = (error) => {
	return {
		type: templatesTypes.TEMPLATES_FETCH_FAIL,
		error: error,
	};
};

export const templatesFetchStart = () => {
	return {
		type: templatesTypes.TEMPLATES_FETCH_START,
	};
};
// SINGLE TEMPLATE ACTIONS -------------------------------------------------
export const singleTemplateFetch = (template) => {
	return {
		type: templatesTypes.TEMPLATE_FETCH_SINGLE,
		singleTemplate: template,
	};
};

export const templateSingleFetchFail = (error) => {
	return {
		type: templatesTypes.TEMPLATE_SINGLE_FETCH_FAIL,
		error: error,
	};
};

export const templateSingleFetchSuccess = (template) => {
	return {
		type: templatesTypes.TEMPLATE_SINGLE_FETCH_SUCCESS,
		singleTemplate: template,
	};
};
