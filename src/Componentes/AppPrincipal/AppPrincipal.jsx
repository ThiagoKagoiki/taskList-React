import React, { useState } from "react";
import './AppPrincipal.css'
import TaskList from "../TaskList/TaskList";
import Button from "../Button/Button";


function AppPrincipal(){

    const [listaTarefas] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function AddTarefas(){
        let tarefas = document.getElementById('input-adicionar').value
        if(tarefas.trim() !== ""){
            listaTarefas.push(tarefas)
            setInputValue("");
        }else{
            console.log("Digite algo valido")
        }
        
    }

    return(
        <div className="btn-input">

            <h1 className="titulo">Adicione sua tarefa</h1>

            <div className="inputs">
            <input type="text"  
            id="input-adicionar" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/>


            <Button OnClick={AddTarefas} style={{backgroundColor: 'rgb(122, 117, 140)', color: 'rgb(255, 255, 255)', width: '200px'}}>Adicionar</Button>

            <TaskList tarefasList={listaTarefas}/>
            
            </div>
        </div>

    )
    
}

export default AppPrincipal;