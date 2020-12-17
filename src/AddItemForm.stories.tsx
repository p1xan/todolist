import { AddItemForm } from "./AddItemForm";
import React from "react";
import {action} from '@storybook/addon-actions'

export default {
    title: 'AddItemForm Component',
    component: AddItemForm
}

const callBack =  action('button add was pressed');

export const AddItemFormBaseExample = (props:any) => {
    return <AddItemForm addItem={callBack}/>
}