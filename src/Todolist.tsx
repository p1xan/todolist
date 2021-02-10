import React, {useCallback, useEffect} from "react";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {Task} from "./Task";
import {TaskStatuses, TaskType} from "./api/todolists-API";
import {FilterValuesType} from "./state/todolists-reducer";
import { useDispatch } from "react-redux";
import { fetchTasksTC } from "./state/tasks-reducer";


type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, status:TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (id: string, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
}

export const Todolist = React.memo( function (props: PropsType) {

    const dispatch = useDispatch()
    useEffect(() => {
        const thunk = fetchTasksTC(props.id)
        dispatch(thunk)
    },[])

    const onAllClickHandler =useCallback( () => {
        props.changeFilter('all', props.id)
    },[ props.changeFilter,props.id])
    const onActiveClickHandler =useCallback( () => {
        props.changeFilter('active', props.id)
    },[props.changeFilter,props.id])
    const onCompletedClickHandler =useCallback( () => {
        props.changeFilter('completed', props.id)
    },[props.changeFilter,props.id])
    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }
    const changeTodolistTitle = useCallback( (title: string) => {
        props.changeTodolistTitle(props.id, title);
    },[props.id,props.changeTodolistTitle])

    const addTask = useCallback( (title: string) => {
        props.addTask(title, props.id)
    },[props.addTask,props.id])


    let tasksForTodolist = props.tasks

    if (props.filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.New)
    }
    if (props.filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.Completed)
    }


    return <div>
        <h3><EditableSpan title={props.title} onChange={changeTodolistTitle}/>

            <IconButton aria-label="delete" onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </h3>

        <AddItemForm addItem={addTask}/>
        <div>
            {
                tasksForTodolist.map(t => <Task
                    key={t.id}
                    task={t}
                    changeTaskStatus={props.changeTaskStatus}
                    changeTaskTitle={props.changeTaskTitle}
                    removeTask={props.removeTask}
                    todolistId={props.id}
                />)

            }
        </div>
        <div>
            <Button variant={props.filter === 'all' ? 'contained' : 'text'} onClick={onAllClickHandler}>All</Button>
            <Button color={"primary"} variant={props.filter === 'active' ? 'contained' : 'text'}
                    onClick={onActiveClickHandler}>Active</Button>
            <Button color={"secondary"} variant={props.filter === 'completed' ? 'contained' : 'text'}
                    onClick={onCompletedClickHandler}>Completed</Button>
        </div>
    </div>
});

