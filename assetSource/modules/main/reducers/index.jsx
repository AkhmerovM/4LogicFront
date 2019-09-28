import {actionMainTypes} from "../constants";

const initialState = {
   key: '',
    data: ''
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
    case (actionMainTypes.sendCode):
        return {
            ...state,
            key: action.payload
        };
    case (actionMainTypes.setCheckData):
        return {
            ...state,
            data: action.payload
        };
    default: return { ...state };
    }
};
export { mainReducer };
