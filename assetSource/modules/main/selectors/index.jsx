import { mainModuleName } from 'modules/main/constants';

function selectMainModule (state) {
    return state[mainModuleName];
}
function selectKey (state) {
    return selectMainModule(state).key;
}
function selectData(state) {
    return selectMainModule(state).data;
}
export { selectKey, selectData};
