export enum authTypes {
	AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS',
	AUTH_CHECK = 'AUTH_CHECK',
	AUTH_START = 'AUTH_START',
	AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
	AUTH_FAIL = 'AUTH_FAIL',
	AUTH_LOGOUT = 'AUTH_LOGOUT',
	AUTH_REDIRECT_PATH = 'AUTH_REDIRECT_PATH',
	AUTH_SET_USER_BOARDS = 'AUTH_SET_USER_BOARDS',
}
export enum boardsTypes {
	BOARDS_FETCH_ALL = 'BOARDS_FETCH_ALL',
	BOARDS_FETCH_START = 'BOARDS_FETCH_START',
	BOARDS_FETCH_FAIL = 'BOARDS_FETCH_FAIL',
	BOARDS_FETCH_SUCCESS = 'BOARDS_FETCH_SUCCESS',
	SINGLE_BOARD_FETCH_START = 'SINGLE_BOARD_FETCH_START',
	SINGLE_BOARD_FETCH_FAIL = 'SINGLE_BOARD_FETCH_FAIL',
	SINGLE_BOARD_FETCH_SUCCESS = 'SINGLE_BOARD_FETCH_SUCCESS',
	BOARD_CREATE_START = 'BOARD_CREATE_START',
	BOARD_CREATE_FAIL = 'BOARD_CREATE_FAIL',
	BOARD_CREATE_SUCCESS = 'BOARD_CREATE_SUCCESS',
}
export enum templatesTypes {
	TEMPLATES_FETCH_START = 'TEMPLATES_FETCH_START',
	TEMPLATES_FETCH_FAIL = 'TEMPLATES_FETCH_FAIL',
	TEMPLATES_FETCH_SUCCESS = 'TEMPLATES_FETCH_SUCCESS',
	TEMPLATE_SINGLE_FETCH_START = 'TEMPLATE_SINGLE_FETCH_START',
	TEMPLATE_SINGLE_FETCH_FAIL = 'TEMPLATE_SINGLE_FETCH_FAIL',
	TEMPLATE_SINGLE_FETCH_SUCCESS = 'TEMPLATE_SINGLE_FETCH_SUCCESS',
	TEMPLATE_FETCH_ALL = 'TEMPLATE_FETCH_ALL',
	TEMPLATE_FETCH_SINGLE = 'TEMPLATE_FETCH_SINGLE',
}