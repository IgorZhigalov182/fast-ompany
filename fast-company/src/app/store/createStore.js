import {
    // applyMiddleware,
    combineReducers,
    configureStore
} from "@reduxjs/toolkit";
import qualitiesReducer from "./qualities";
import professionsReducer from "./professions";
import usersReducer from "./users";
import commentsReducer from "./comments";
// import { thunk } from "./middleware/thunk";
import thunk from "redux-thunk";
// const middlewareEnhancer = applyMiddleware(thunk);

const rootReducer = combineReducers({
    qualities: qualitiesReducer,
    professions: professionsReducer,
    users: usersReducer,
    comments: commentsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(thunk)
    });
}
