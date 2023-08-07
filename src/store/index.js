import { combineReducers } from "redux";

import UserReducer from "./users/reducer";

const rootReducer = combineReducers({
    User: UserReducer
});

export default rootReducer;