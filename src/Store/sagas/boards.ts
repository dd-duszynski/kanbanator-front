import { call, put, takeLatest } from 'redux-saga/effects';
import { templatesFetchSuccess, templatesFetchFail } from '../actions/templates';
import { boardsTypes, templatesTypes } from '../actions/actionTypes';

const getAllBoards = (userId) => {
	return fetch(`${process.env.REACT_APP_API_URL}/boards`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			userId: userId,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			let fetchedBoards = [];
			for (let key in data.userBoards) {
				fetchedBoards.push({
					...data.userBoards[key],
				});
			}
			return fetchedBoards;
		});
};

// worker
export function* fetchAllBoards(action) {
	try {
		const templates = yield call(getAllBoards, action);
		yield put(templatesFetchSuccess(templates));
	} catch (err) {
		yield put(templatesFetchFail(err));
	}
}

// watcher
export function* watchFetchAllBoards() {
	yield takeLatest(boardsTypes.BOARDS_FETCH_ALL, fetchAllBoards);
}
