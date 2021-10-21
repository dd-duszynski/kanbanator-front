import { call, put, takeLatest } from 'redux-saga/effects';
import { templatesFetchSuccess, templatesFetchFail } from '../actions/templates';
import { templatesTypes } from '../actions/actionTypes';

const getAllTemplates = () => {
	return fetch(`${process.env.REACT_APP_API_URL}/templates`)
		.then((res) => res.json())
		.then((data) => {
			let templates: any = [];
			for (let key in data) {
				templates.push({
					...data[key],
				});
			}
			return templates;
		});
};

// worker
export function* fetchAllTemplates() {
	try {
		const templates = yield call(getAllTemplates);
		yield put(templatesFetchSuccess(templates));
	} catch (err) {
		yield put(templatesFetchFail(err));
	}
}

// watcher
export function* watchFetchAllTemplates() {
	yield takeLatest(templatesTypes.TEMPLATE_FETCH_ALL, fetchAllTemplates);
}
