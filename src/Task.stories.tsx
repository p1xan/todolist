import React from "react";
import {action} from '@storybook/addon-actions'
import { Task } from "./Task";

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
            task={{id:'1',isDone:true,title:'CSS'}}
            changeTaskStatus={changeTaskStatusCallBack}
            changeTaskTitle={changeTaskTitleCallBack}
            removeTask={removeTaskCallBack}
            todolistId={'todolistId1'}
        />
        <Task
            task={{id:'2',isDone:false,title:'js'}}
            changeTaskStatus={changeTaskStatusCallBack}
            changeTaskTitle={changeTaskTitleCallBack}
            removeTask={removeTaskCallBack}
            todolistId={'todolistId2'}
        />
        </>
}