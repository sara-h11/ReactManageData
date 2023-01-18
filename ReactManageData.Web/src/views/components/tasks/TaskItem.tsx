import { TaskItemProps} from "../../../domain/TaskItemProps";
import {memo, useContext} from 'react';
import { Button, Checkbox } from "antd";
import { AppContext } from "App";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask } from "./task.slice";

interface TaskIProps {
    taskItem : TaskItemProps,
}
const TaskItem =({taskItem} : TaskIProps ) => {
    const dispatch = useDispatch();
    const [context] = useContext(AppContext);
    return(
        <>
            <li className="m-2">
            <Checkbox checked={taskItem.done} onChange={() =>dispatch(toggleTask(taskItem))}/>
                <span onClick={() => dispatch(toggleTask(taskItem))} style={{color : context.color}}> {taskItem.taskName} </span>
                <Button onClick={() => dispatch(removeTask(taskItem))} type="primary" danger size="small" >✖</Button>
            </li>
        </>
        
    )
};

export default memo(TaskItem)
