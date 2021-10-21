import { boardsTypes } from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
	error: null,
	loadingBoards: null,
	userBoards: null,
	loadingSingleBoard: null,
	singleBoard: null,
	loadingBoardCreation: null,
};

const boardsFetchStart = (state, action) => {
	return updateObject(state, {
		error: null,
		loadingBoards: true,
	});
};
const boardsFetchFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		loadingBoards: false,
	});
};
const boardsFetchSuccess = (state, action) => {
	return updateObject(state, {
		error: null,
		loadingBoards: false,
		userBoards: action.userBoards,
	});
};

// ------------------------------

const singleBoardFetchStart = (state, action) => {
	return updateObject(state, {
		error: null,
		loadingSingleBoard: true,
	});
};
const singleBoardFetchFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		loadingSingleBoard: false,
	});
};
const singleBoardFetchSuccess = (state, action) => {
	return updateObject(state, {
		error: null,
		loadingSingleBoard: false,
		singleBoard: action.singleBoard,
	});
};

// -----------------------------------

const createBoardStart = (state, action) => {
	return updateObject(state, {
		error: null,
		loadingBoardCreation: true,
	});
};
const createBoardFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		loadingBoardCreation: false,
	});
};
const createBoardSuccess = (state, action) => {
	return updateObject(state, {
		error: null,
		loadingBoardCreation: false,
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case boardsTypes.BOARDS_FETCH_START:
			return boardsFetchStart(state, action);
		case boardsTypes.BOARDS_FETCH_FAIL:
			return boardsFetchFail(state, action);
		case boardsTypes.BOARDS_FETCH_SUCCESS:
			return boardsFetchSuccess(state, action);

		case boardsTypes.SINGLE_BOARD_FETCH_START:
			return singleBoardFetchStart(state, action);
		case boardsTypes.SINGLE_BOARD_FETCH_FAIL:
			return singleBoardFetchFail(state, action);
		case boardsTypes.SINGLE_BOARD_FETCH_SUCCESS:
			return singleBoardFetchSuccess(state, action);

		case boardsTypes.BOARD_CREATE_START:
			return createBoardStart(state, action);
		case boardsTypes.BOARD_CREATE_FAIL:
			return createBoardFail(state, action);
		case boardsTypes.BOARD_CREATE_SUCCESS:
			return createBoardSuccess(state, action);

		default:
			return state;
	}
};

export default reducer;
