import { Button, Input } from "antd";
import Header from "core/Header";
import TaskItem from "./TaskItem";
import styles from "assets/css/task.module.css";
import { useDispatch } from "react-redux";
import { addTask, newTask, taskListSelector } from "./task.slice";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function TaskList(){
    const dispatch = useDispatch();
    const taskList = useSelector(taskListSelector);
    const [newTaskName , setNewTaskName] = useState<string>("");

    function addTaskName () {
        dispatch(addTask(newTaskName));
        setNewTaskName("");
    };

    return(
        <>
             <Header title='Tasks' content="tasks" />
             <h2 className={styles.header} >Tasklist : </h2>
            <Button onClick={() => dispatch(newTask()) } type="primary">New Task</Button>
            <div>
                <span>New Task : </span>
                <Input placeholder="Task Name" style={{ width: "240px" }}
                onChange={e => setNewTaskName(e.target.value)} value={newTaskName}/ >
                <Button type="primary" className="m-2" disabled={newTaskName ? false : true} onClick={() => addTaskName()}>Add</Button>
            </div>
            <ul style={{listStyle : "none"}}>
                {taskList.map((taskItem) => (
                    <TaskItem key={taskItem.id} taskItem={taskItem} />
                ))}
            </ul>
        </>
    )
}