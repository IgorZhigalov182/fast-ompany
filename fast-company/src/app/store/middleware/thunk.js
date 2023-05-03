export function thunk(state) {
    return function wrapDispatch(next) {
        return function handleAction(action) {
            console.log(state);
            console.log(next);
            console.log(action);
        };
    };
}
