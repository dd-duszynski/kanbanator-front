import { call, put, takeLatest } from 'redux-saga/effects';
import { templatesTypes } from '../actions/actionTypes';
import { templateSingleFetchSuccess, templateSingleFetchFail } from '../actions/templates';

const getTemplate = (templateURL: string) => {
	return fetch(`${process.env.REACT_APP_API_URL}/templates/${templateURL}`)
		.then((res) => res.json())
		.then((data) => {
			console.log('getTemplate', data);
			return data;
		});
};

// worker
export function* fetchTemplate(action) {
	try {
		const template = yield call(getTemplate, action.singleTemplate);
		yield put(templateSingleFetchSuccess(template));
	} catch (err) {
		yield put(templateSingleFetchFail(err));
	}
}

// watcher
export function* watchFetchTemplate() {
	yield takeLatest(templatesTypes.TEMPLATE_FETCH_SINGLE, fetchTemplate);
}
