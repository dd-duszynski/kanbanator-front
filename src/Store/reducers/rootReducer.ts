import { combineReducers } from 'redux';
import authReducer from './auth';
import boardsReducer from './boards';
import templatesReducer from './templates';

const rootReducer = combineReducers({
	auth: authReducer,
	boards: boardsReducer,
	templates: templatesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
