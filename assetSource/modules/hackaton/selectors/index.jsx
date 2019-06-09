import { bodyModuleName } from 'modules/hackaton/constants';

function selectBodyModule (state) {
    return state[bodyModuleName];
}
function selectPost (state) {
    return selectBodyModule(state).post;
}
function selectPostData (state) {
    return selectPost(state).data;
}
function selectHuman (state) {
    return selectBodyModule(state).people;
}
function selectHumanData (state) {
    return selectHuman(state).data;
}
function selectCurrentPost (state, id) {
    return selectPostData(state)[id];
}
export { selectBodyModule, selectPostData, selectPost, selectCurrentPost, selectHumanData };
