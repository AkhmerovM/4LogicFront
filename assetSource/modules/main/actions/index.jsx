import { bodyApi } from 'api/body-api';
import {actionMainTypes} from "../constants";

const actionSendCode = (data) => {
    return {
        type: actionMainTypes.sendCode,
        payload: data
    };
};
const actionSetCheckData= (data) => {
    return {
        type: actionMainTypes.setCheckData,
        payload: data
    };
};
const sendCode = (file) => {
    return async function (dispatch) {
        const {result} = await bodyApi.sendCode(file);
        dispatch(actionSendCode(result));
    };
};
const getCheckData = (key) => {
    return async function (dispatch) {
        const { result } = await bodyApi.checkData(key).then((response) => response);
        dispatch(actionSetCheckData(JSON.parse(result)));
    };
};

export { sendCode, getCheckData };
