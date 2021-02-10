import React from "react";
import {action} from '@storybook/addon-actions'
import {Task} from "./Task";
import {TaskPriorities, TaskStatuses} from "./api/todolists-API";

export default {
    title: 'Task Component',
    component: Task
}

const changeTaskStatusCallBack =  action('status changed');
const changeTaskTitleCallBack =  action('title changed');
const removeTaskCallBack =  action('task remove');


export const TaskBaseExample = () => {
    return <>
        <Task
            task={{id:'1',status:TaskStatuses.Completed,title:'CSS', todoListId:"todolistId1",description:'',
                startDate:'', deadline:'',addedDate:'',order:0,priority:TaskPriorities.Low}}
            changeTaskStatus={changeTaskStatusCallBack}
            changeTaskTitle={changeTaskTitleCallBack}
            removeTask={removeTaskCallBack}
            todolistId={'todolistId1'}
        />
        <Task
            task={{id:'2',status:TaskStatuses.New,title:'js', todoListId:"todolistId1",description:'',
                startDate:'', deadline:'',addedDate:'',order:0,priority:TaskPriorities.Low}}
            changeTaskStatus={changeTaskStatusCallBack}
            changeTaskTitle={changeTaskTitleCallBack}
            removeTask={removeTaskCallBack}
            todolistId={'todolistId2'}
        />
        </>
}