import { combineReducers } from "redux"

import todoReducers from "./reducers/todoReducers"

const rootReducer = combineReducers({
    todo: todoReducers,
})

export default rootReducer
