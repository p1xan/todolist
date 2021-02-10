import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {todolistsReducer} from "./todolists-reducer";
import thunkMiddleware from "redux-thunk";


export const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
})


export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store;

