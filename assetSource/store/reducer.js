import { bodyReducer } from 'modules/hackaton/reducers';
import { combineReducers } from 'redux';
import { bodyModuleName } from 'modules/hackaton/constants';

export default combineReducers({
    [bodyModuleName]: bodyReducer
});
