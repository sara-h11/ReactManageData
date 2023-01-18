import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { TaskItemProps } from './TaskItemProps'
import { useState } from 'react'

const initialState = {
    tasks : [
        { id : 1 , taskName : "programieren" , done : true},
        { id : 2 , taskName : "Deutsch" , done : false},
        { id : 3 , taskName : "sport" , done : false},
    ]
}
// const [randomNum, setRandomNum] = useState(30)
export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask : (state , action : PayloadAction<string>) => {
        state.tasks.push({
            id : randomId(),
            taskName : action.payload,
            done : false
        })
    },
    toggleTask  : (state , action :PayloadAction<TaskItemProps> ) => {
        const task =  state.tasks.find( t => t.id === action.payload.id);
        if(task){
            task.done = !task.done;
        }
        
    },
    removeTask  : (state , action: PayloadAction<TaskItemProps> ) => {
       state.tasks = state.tasks.filter(t => t.id !== action.payload.id)

    },
    newTask : (state) => {
       
        const newId = randomId();
        state.tasks.push({
            id : newId,
            taskName : 'TaskNumber ' + newId,
            done : false
        });

    },
    editTask : (state , action : PayloadAction<{id : number , title : string}>) => {
        const task =  state.tasks.find( t => t.id === action.payload.id);
        if(task){
            task.taskName = action.payload.title;
        }
    }
}
})
function randomId(){
    const randomNum = Math.floor(Math.random() *101)+10;
    return randomNum;
}
export const { addTask , newTask , toggleTask , removeTask , editTask } = taskSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default taskSlice.reducer;
export const taskListSelector = (state : RootState) => state.taskListState.tasks;