import React from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from "./Todolist";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from "@material-ui/icons";
import { useReducer } from 'react';
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC, FilterValuesType, removeTodolistAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";
import {TaskPriorities, TaskStatuses, TaskType } from './api/todolists-API';

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithReducers() {
    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, dispatchTodolistsReducer] = useReducer(todolistsReducer,[
        {id: todolistId1, title: "What to learn", filter: "all" ,addedDate: '',
            order: 0},
        {id: todolistId2, title: "What to buy", filter: "all",addedDate: '',
            order: 0}
    ])
    let [tasksObj, dispatchToTasksReducer] = useReducer(tasksReducer,{
        [todolistId1]: [
            {id: v1(), title: "CSS", status: TaskStatuses.Completed, todoListId:todolistId1,description:'',startDate:'',
        deadline:'',addedDate:'',order:0,priority:TaskPriorities.Low},
            {id: v1(), title: "JS",status: TaskStatuses.Completed, todoListId:todolistId1,description:'',startDate:'',
                deadline:'',addedDate:'',order:0,priority:TaskPriorities.Low},

        ],
        [todolistId2]: [
            {id: v1(), title: "book", status: TaskStatuses.Completed, todoListId:todolistId2,description:'',startDate:'',
                deadline:'',addedDate:'',order:0,priority:TaskPriorities.Low},
            {id: v1(), title: "beer", status: TaskStatuses.Completed, todoListId:todolistId2,description:'',startDate:'',
                deadline:'',addedDate:'',order:0,priority:TaskPriorities.Low},

        ]
    })

    function removeTask(id: string, todolistId: string) {
        const action = removeTaskAC(id,todolistId);
        dispatchToTasksReducer(action)
    }

    function addTask(title: string, todolistId: string) {
        const action = addTaskAC(title,todolistId)
       dispatchToTasksReducer(action)
    }

    function changeStatus(taskId: string, status:TaskStatuses, todolistId: string) {
        const action = changeTaskStatusAC(taskId,status,todolistId)
        dispatchToTasksReducer(action)
    }

    function changeTaskTitle(taskId: string, newTitle: string, todolistId: string) {
        const action = changeTaskTitleAC(taskId,newTitle,todolistId)
        dispatchToTasksReducer(action)
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
      const action = changeTodolistFilterAC(value,todolistId)
        dispatchTodolistsReducer(action)
    }

    function removeTodolist(todolistId: string) {
       const action = removeTodolistAC(todolistId)
        dispatchTodolistsReducer(action)
        dispatchToTasksReducer(action)
    }

    function changeTodolistTitle(id: string, newTitle: string) {
       const action = changeTodolistTitleAC(id,newTitle)
        dispatchTodolistsReducer(action)
    }

    function addTodolist(title: string) {
     const action = addTodolistAC(title)
        dispatchToTasksReducer(action)
        dispatchTodolistsReducer(action)

    }

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Login
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding:"20px"}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={5}>
                {
                    todolists.map((tl) => {
                        let tasksForTodolist = tasksObj[tl.id]

                        if (tl.filter === 'completed') {
                            tasksForTodolist = tasksForTodolist.filter(t => t.status === TaskStatuses.New)
                        }
                        if (tl.filter === 'active') {
                            tasksForTodolist = tasksForTodolist.filter(t => t.status === TaskStatuses.Completed )
                        }
                        return <Grid item>
                            <Paper style={{padding:"10px"}}>
                        <Todolist title={tl.title}
                                         tasks={tasksForTodolist}
                                         removeTask={removeTask}
                                         changeFilter={changeFilter}
                                         addTask={addTask}
                                         changeTaskStatus={changeStatus}
                                         changeTaskTitle={changeTaskTitle}
                                         filter={tl.filter}
                                         id={tl.id}
                                         key={tl.id}
                                         removeTodolist={removeTodolist}
                                         changeTodolistTitle={changeTodolistTitle}

                        />
                            </Paper>
                        </Grid>
                    })
                }
                </Grid>

            </Container>
        </div>
    );
}

export default AppWithReducers;
