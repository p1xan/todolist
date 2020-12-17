import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {todolistsAPI} from '../../api/todolists-API'

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "5ef544a3-f9f0-42e5-96f2-1621636d3144"
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.createTodolist('lol3')
            .then((res) => {
                setState(res.data)
            })
    }, [])


    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {

    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '604dd85b-172d-4e85-9c9e-1fdb0b23547e'
        todolistsAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {

    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '96c2213b-5a83-4acf-b8b4-cac6ad4ddf61'
        todolistsAPI.updateTodolist(todolistId, 'lol4')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")

    const getTasks = () => {
        todolistsAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>


            <button onClick={getTasks}>Get Tasks</button>

        </div>
    </div>
}

export const DeleteTask = () => {

    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const deleteTask = () => {
        todolistsAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={"taskId"} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <button onClick={deleteTask}>Delete Task</button>
        </div>
    </div>
}

export const CrateTask = () => {

    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const createTask = () => {
        todolistsAPI.createTask(todolistId, taskTitle)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>

            <input placeholder={"taskTitle"} value={taskTitle}
                   onChange={(e) => {
                       setTaskTitle(e.currentTarget.value)
                   }}/>

            <button onClick={createTask}>Create Task</button>
        </div>
    </div>
}

export const UpdateTask = () => {

    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>("title 1")
    const [description, setDescription] = useState<string>("description 1")
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)
    const [startDay, setStartDay] = useState<string>('')
    const [deadLine, setDeadLine] = useState<string>('')

    const [todolistId, setTodolistId] = useState<string>('')
    const [taskId, setTaskId] = useState<string>('')

    const createTask = () => {
        todolistsAPI.updateTask(todolistId, taskId, {
            deadline: '',
            description: description,
            priority: priority,
            startDate: '',
            status: status,
            title: title
        })
            .then((res) => {
                setState(res.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"taskId"} value={taskId} onChange={e => {
                setTaskId(e.currentTarget.value)
            }}/>
            <input placeholder={"todolistId"} value={todolistId} onChange={e => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={"taskTitle"} value={title} onChange={e => {
                setTitle(e.currentTarget.value)
            }}/>
            <input placeholder={"taskDescription"} value={description} onChange={e => {
                setDescription(e.currentTarget.value)
            }}/>
            <input placeholder={"status"} value={status} type="number" onChange={e => {
                setStatus(+e.currentTarget.value)
            }}/>
            <input placeholder={"priority"} value={priority} type="number" onChange={e => {
                setPriority(+e.currentTarget.value)
            }}/>

            <button onClick={createTask}>Update Task</button>
        </div>
    </div>
}