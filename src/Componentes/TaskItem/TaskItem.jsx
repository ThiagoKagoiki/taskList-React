import React, {useState, createContext, useEffect} from "react";
import Button from "../Button/Button";
import './TaskItem.css'


function TaskItem({tarefaItem}){
    

    const [checkedItems, setCheckedItems] = useState(Array(tarefaItem.length).fill(false));    //isChecked na real nao esta ativada no jeito que pensamos
    const [tarefasRealizadas, setTarefasRealizadas] = useState([]);
    const [tarefasPendentes, setTarefasPendentes] = useState([]);

    const handleCheckboxChange = (index) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !updatedCheckedItems[index]; // Alterna o estado da checkbox
        setCheckedItems(updatedCheckedItems);

        const tarefa = tarefaItem[index];

        if (updatedCheckedItems[index]) {
            setTarefasRealizadas(prevTarefas => [...prevTarefas, tarefa]);
            setTarefasPendentes(prevTarefas => prevTarefas.filter(t => t !== tarefa)); 
        } else {
            setTarefasRealizadas(prevTarefas => prevTarefas.filter(t => t !== tarefa));
            setTarefasPendentes(prevTarefas => [...prevTarefas, tarefa]);
        }
    };

    
    const removeTask = (index) => {
        if (index >= 0 && index < tarefaItem.length) {
            const tarefaRemovida = tarefaItem[index];
            console.log("Removendo tarefa:", tarefaRemovida);
            tarefaItem.splice(index, 1)
            console.log(tarefaItem)

            setTarefasPendentes(prevTarefas => prevTarefas.filter(t => t !== tarefaRemovida));

            setTarefasRealizadas(prevTarefas => prevTarefas.filter(t => t !== tarefaRemovida));

            const updatedCheckedItems = [...checkedItems];
            updatedCheckedItems.splice(index, 1);
            setCheckedItems(updatedCheckedItems);
        }
    };




    return(

        <div className="listas">


            <div className="todas-task">
            <h3>Lista de Tarefas:</h3>
            <ul>
                {tarefaItem.map((tarefa, index) => (
                    <li key={index}><h4>Tarefa: </h4> {tarefa} 
                        <input 
                        type="checkbox" 
                        checked= {checkedItems[index]} 
                        onChange={() => handleCheckboxChange (index)}/>
                        <Button OnClick={() => removeTask(index)} style={{backgroundColor: 'rgb(150, 0, 0)'}}>🗑️</Button>
                    </li>
                ))}
            </ul>
            </div>



            <div className="realizadas-task">
            <h3>Lista de Tarefas realizadas:</h3>
            <ul>
                {tarefasRealizadas.map((tarefa, index) => (
                    <li key={index}><h4>Tarefa: </h4> {tarefa} 
                        <input 
                        type="checkbox" 
                        checked= {true} 
                        onChange={() => handleCheckboxChange(tarefaItem.indexOf(tarefa))}/> 
                    </li>
                ))}
            </ul>
            </div>



            <div className="pendente-task">
            <h3>Lista de Tarefas pendentes:</h3>
            <h4>Quantidade: {tarefasPendentes.length}</h4>
            <ul>
                {tarefasPendentes.map((tarefa, index) => (
                    <li key={index}><h4>Tarefa: </h4> {tarefa} 
                        <input 
                        type="checkbox" 
                        checked= {false} 
                        onChange={() => handleCheckboxChange(tarefaItem.indexOf(tarefa))}/>
                    </li>
                ))}
            </ul>
            </div>




        </div>
    )
}

export default TaskItem