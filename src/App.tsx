import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from "./Todolist";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from "@material-ui/icons";
import {TaskPriorities, TaskStatuses, TaskType} from './api/todolists-API';
import {FilterValuesType, TodolistDomainType} from "./state/todolists-reducer";


export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {
    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolist] = useState<Array<TodolistDomainType>>([
        {id: todolistId1, title: "What to learn", filter: "all",addedDate:'', order:0},
        {id: todolistId2, title: "What to buy", filter: "all",addedDate:'', order:0}
    ])
    let [tasksObj, setTasks] = useState<TasksStateType>({
        [todolistId1]: [
            {id: v1(), title: "CSS", status: TaskStatuses.Completed, todoListId:todolistId1, description:'', startDate:'',
                deadline:'', addedDate:'', order: 0, priority:TaskPriorities.Low},
            {id: v1(), title: "JS", status:TaskStatuses.Completed, todoListId:todolistId1,description:'',startDate:'',
                deadline:'',addedDate:'',order:0,priority:TaskPriorities.Low}
        ],
        [todolistId2]: [
            {id: v1(), title: "book", status:TaskStatuses.Completed, todoListId:todolistId2,description:'',startDate:'',
                deadline:'',addedDate:'',order:0,priority:TaskPriorities.Low},
            {id: v1(), title: "beer", status:TaskStatuses.Completed, todoListId:todolistId2,description:'',startDate:'',
                deadline:'',addedDate:'',order:0,priority:TaskPriorities.Low},
        ]
    })

    function removeTask(id: string, todolistId: string) {
        let tasks = tasksObj[todolistId];

        let filteredTasks = tasks.filter(t => t.id !== id)
        tasksObj[todolistId] = filteredTasks
        setTasks({...tasksObj})
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, status:TaskStatuses.New, todoListId:todolistId,description:'',startDate:'',
            deadline:'',addedDate:'',order:0,priority:TaskPriorities.Low}
        let todolistTasks = tasksObj[todolistId];
        tasksObj[todolistId] = [task,...todolistTasks]
        setTasks({...tasksObj})
    }

    function changeStatus(taskId: string, status: TaskStatuses, todolistId: string) {
        let todolistTasks = tasksObj[todolistId];
        let task = todolistTasks.find(t => t.id === taskId)
        if (task) {
            task.status = status

            setTasks({...tasksObj});
        }
    }

    function changeTaskTitle(taskId: string, newTitle: string, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.title = newTitle

            setTasks({...tasksObj});
        }
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value;
            setTodolist([...todolists]);
        }
    }

    function removeTodolist(todolistId: string) {
        let filteredTodolists = todolists.filter(tl => tl.id !== todolistId)
        setTodolist(filteredTodolists);
        delete tasksObj[todolistId]
        setTasks({...tasksObj});
    }

    function changeTodolistTitle(id: string, newTitle: string) {
        const todolist = todolists.find(tl => tl.id === id)
        if (todolist) {
            todolist.title = newTitle;
            setTodolist([...todolists])
        }
    }

    function addTodolist(title: string) {
        let newTodolistId = v1()
        let newTodolist: TodolistDomainType = {
            id: newTodolistId,
            filter: "all",
            title: title,
            addedDate: '',
            order: 0
        }
        setTodolist([newTodolist, ...todolists]);
        setTasks({
            ...tasksObj,
            [newTodolistId]: []
        })
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
                            tasksForTodolist = tasksForTodolist.filter(t => t.status === TaskStatuses.Completed)
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

export default App;
