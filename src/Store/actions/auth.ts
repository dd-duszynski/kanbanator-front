import { authTypes } from './actionTypes';

export const authStart = () => {
	return {
		type: authTypes.AUTH_START,
	};
};

export const authSuccess = (token: string, userId: string) => {
	return {
		type: authTypes.AUTH_LOGIN_SUCCESS,
		idToken: token,
		userId: userId,
	};
};

export const signupSuccess = (message: string) => {
	return {
		type: authTypes.AUTH_SIGNUP_SUCCESS,
		message: message,
	};
};

export const authFail = (error: string) => {
	return {
		type: authTypes.AUTH_FAIL,
		error: error,
	};
};

export const setUserBoards = (boards: string) => {
	return {
		type: authTypes.AUTH_SET_USER_BOARDS,
		boards: boards,
	};
};

export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('userId');
	localStorage.removeItem('boards');
	return {
		type: authTypes.AUTH_LOGOUT,
	};
};

export const auth = (email: string, password: string) => {
	return (dispatch: any) => {
		dispatch(authStart());
		fetch('http://localhost:5000/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.error !== null) {
					dispatch(authFail(data.error));
					return;
				}
				return data;
			})
			.then((data) => {
				const userBoards = JSON.stringify(data.boards);
				localStorage.setItem('token', data.token);
				localStorage.setItem('userId', data.userId);
				localStorage.setItem('boards', userBoards);
				dispatch(setUserBoards(data.boards));
				return data;
			})
			.then((data) => {
				return dispatch(authSuccess(data.token, data.userId));
			})
			.catch((err) => {
				console.log('[authFail]', err);
			});
	};
};

export const sign = (name: string, email: string, password: string) => {
	return (dispatch: any) => {
		dispatch(authStart());
		fetch('http://localhost:5000/api/users/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				email: email,
				password: password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.error !== null) {
					dispatch(authFail(data.error));
					return;
				}
				dispatch(signupSuccess(data.message));
			})
			.catch((err) => {
				console.log('[authFail]', err);
			});
	};
};

export const setAuthRedirectPath = (path: string) => {
	return {
		type: authTypes.AUTH_REDIRECT_PATH,
		path: path,
	};
};

export const authCheck = () => {
	return (dispatch: any) => {
		const token = localStorage.getItem('token');
		if (!token) {
			dispatch(logout());
		} else {
			const userId = localStorage.getItem('userId')!;
			dispatch(authSuccess(token, userId));
		}
	};
};
