export function rootInitData(state = {}, action) {
    switch (action.type) {
        case "ROOT_INIT_DATA":
            return Object.assign({}, state, action.result);
        default:
            return state;
    }
}