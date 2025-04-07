import React from "react";
import './TaskList.css'
import TaskItem from "../TaskItem/TaskItem";


const TaskList = ({tarefasList}) => {

    return(
        
        <TaskItem tarefaItem = {tarefasList}/>
    )

}

export default TaskList