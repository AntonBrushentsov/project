import { combineReducers } from 'redux';

import listReducer from './ListReducer';

const rootReducer = combineReducers({
    listReducer
});

export default rootReducer;