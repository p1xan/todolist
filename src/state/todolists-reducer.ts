import { Dispatch } from "redux";
import {v1} from "uuid";
import {todolistsAPI, TodolistType } from "../api/todolists-API";


type ActionsType = RemoveTodolistActionType | AddTodolistActionType |
    ChangeTodolistTitleActionType | ChangeTodolistFilterActionType | SetTodolistsActionType

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId: string
}
export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterValuesType
}
export type SetTodolistsActionType = {
    type:'SET-TODOLIST'
    todolists:Array<TodolistType>
}

export type FilterValuesType = 'all' | 'completed' | 'active'
export type TodolistDomainType = TodolistType & {
    filter:FilterValuesType
}

const initialState: Array<TodolistDomainType> = []


export const todolistsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionsType): Array<TodolistDomainType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id != action.id)
        }
        case 'ADD-TODOLIST': {
            return [{
                id: action.todolistId,
                title: action.title,
                filter: 'all',
                addedDate:'',
                order:0
            }, ...state]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.title = action.title;
            }
            return [...state]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.filter = action.filter;
            }
            return [...state]
        }
            case 'SET-TODOLIST': {
                return action.todolists.map(tl => {
                    return {
                        ...tl,
                        filter: 'all'
                    }
                })
            }
        default:
            return state

    }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}
export const addTodolistAC = (title: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title: title, todolistId: v1()}
}
export const changeTodolistTitleAC = ( id: string,title: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id: id, title: title}
}
export const changeTodolistFilterAC = (filter: FilterValuesType, id: string): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', id: id, filter: filter}
}
export const setTodolistsAC = (todolists:Array<TodolistType>):SetTodolistsActionType => {
    return {type:'SET-TODOLIST', todolists:todolists}
}

export const fetchTodolistTC = () => {
    return (dispatch: Dispatch) => {
        todolistsAPI.getTodolists()
            .then((res) => {
                dispatch(setTodolistsAC(res.data))
            })
    }
}