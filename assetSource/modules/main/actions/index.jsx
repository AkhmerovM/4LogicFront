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
        const response = await bodyApi.sendCode(file);
        console.log(response);
        console.log(response.result);
        dispatch(actionSendCode(response.result));
    };
};
const getCheckData = (key) => {
    return async function (dispatch) {
        const { data, errors } = await bodyApi.checkData(key).then((response) => response);
        if (!errors.length) {
            dispatch(actionSetCheckData(data));
        }
    };
};

export { sendCode, getCheckData };
