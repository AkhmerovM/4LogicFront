import { combineReducers } from 'redux';
import {mainModuleName} from "../modules/main/constants";
import {mainReducer} from "../modules/main/reducers";

export default combineReducers({
    [mainModuleName]: mainReducer
});
