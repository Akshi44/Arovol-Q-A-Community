import { combineReducers } from "redux";
import currentUserReducer from "./currentUser";
import authReducer from "./auth";
import questionsReducer from "./Questions";
import usersReducer from './users'
export default combineReducers({
    authReducer, currentUserReducer,questionsReducer, usersReducer
})