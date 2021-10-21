//https://www.youtube.com/watch?v=fEjevUGH4BU
//How to Handle Multiple Sagas in Redux Saga

import { all, fork } from 'redux-saga/effects';
import { watchFetchAllTemplates } from './templates';
import { watchFetchTemplate } from './template';

export default function* rootSaga() {
	yield all([
		fork(watchFetchAllTemplates),
		fork(watchFetchTemplate),
		// fork(watchFetchTemplate),
	]);
}
