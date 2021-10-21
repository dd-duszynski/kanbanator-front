import { templatesTypes } from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
	error: null,
	loadingTemplates: null,
	templates: null,
	loadingSingleTemplate: null,
	singleTemplate: null,
};

// TEMPLATES
const templatesFetchStart = (state, action) => {
	return updateObject(state, {
		error: null,
		loadingTemplates: true,
	});
};

const templatesFetchFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		loadingTemplates: false,
	});
};

const templatesFetchSuccess = (state, action) => {
	return updateObject(state, {
		error: null,
		loadingTemplates: false,
		templates: action.templates,
	});
};

// SINGLE TEMPLATE ---------------------------------------------------------
const templateSingleFetchStart = (state, action) => {
	return updateObject(state, {
		error: null,
		loadingSingleTemplate: true,
	});
};

const templateSingleFetchFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		loadingSingleTemplate: false,
	});
};

const templateSingleFetchSuccess = (state, action) => {
	return updateObject(state, {
		error: null,
		loadingSingleTemplate: false,
		singleTemplate: action.singleTemplate,
	});
};
// templatesFetchSuccess
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case templatesTypes.TEMPLATES_FETCH_START:
			return templatesFetchStart(state, action);
		case templatesTypes.TEMPLATES_FETCH_FAIL:
			return templatesFetchFail(state, action);
		case templatesTypes.TEMPLATES_FETCH_SUCCESS:
			return templatesFetchSuccess(state, action);
		case templatesTypes.TEMPLATE_SINGLE_FETCH_START:
			return templateSingleFetchStart(state, action);
		case templatesTypes.TEMPLATE_SINGLE_FETCH_FAIL:
			return templateSingleFetchFail(state, action);
		case templatesTypes.TEMPLATE_SINGLE_FETCH_SUCCESS:
			return templateSingleFetchSuccess(state, action);
		default:
			return state;
	}
};

export default reducer;
