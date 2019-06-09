import { actionBodyTypes } from 'modules/hackaton/constants';
import { bodyApi } from 'api/body-api';
import { normPostList } from 'modules/hackaton/normalizers';

const actionSetPostList = (data) => {
    return {
        type: actionBodyTypes.setPostList,
        payload: data
    };
};
const actionSetPeopleList = (data) => {
    return {
        type: actionBodyTypes.setPeopleList,
        payload: data
    };
};
const loadPostList = () => {
    return async function (dispatch, getState) {
        const { data, errors } = await bodyApi.getPostList();
        if (!errors.length) {
            dispatch(actionSetPostList(normPostList(data.list)));
        }
    };
};
const getPeople = () => {
    return async function (dispatch, getState) {
        const data = await bodyApi.getPeople();
        console.log(data);
        dispatch(actionSetPeopleList(data));
    };
};

export { loadPostList, getPeople };
