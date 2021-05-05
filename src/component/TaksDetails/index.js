import React, { useState, useContext } from 'react';
import {useLocation} from 'react-router-dom';
import {DataContext} from '../../store';
import {useHistory} from 'react-router-dom'

const TaksDetails = () => {
    const history = useHistory();
    const location = useLocation()
    const {dadosArr} = useContext(DataContext)
    const [tes, setTes] = useState(location.state)
    const [nameTaks, setNameTaks] = useState(tes.items.name)
    const [descripTaks, setDescripTaks] = useState(tes.items.description)
    const [completeTaks, setCompleteTaks] = useState(tes.items.complete)
    const [idTaks, setIdTaks] = useState(tes.items.id)
    
    const EditFunc = (e) => {
        e.preventDefault();
        var el = dadosArr.filter(function(el) { return el.id == idTaks; })[0];
        el.complete = completeTaks
        el.name = nameTaks
        el.description = descripTaks
        const newObj = dadosArr;
        localStorage.removeItem('@Question:Task');
        localStorage.setItem('@Question:Task', JSON.stringify(newObj));
        window.location.reload();
        history.push('/Dashboard/pay'); 
    }


    console.log(tes.items, "teste")
    return (
        <div className="order">
            <h1>Editar tarefa</h1>
             <form className="form">
                <div className="input-data">
                    <label>Nome da tarefa:</label>
                    <input value={nameTaks} name="name" onChange={(e) => setNameTaks(e.target.value)} required/>
                </div>
                <div className="input-data">
                    <label>Descrição:</label>
                    <textarea value={descripTaks} name="description" onChange={(e) => setDescripTaks(e.target.value)} style={{ height: 100, width: 270 }} required/>
                </div>
                <select
                    defaultValue={completeTaks}
                    onChange={(e) => setCompleteTaks(e.target.value)}
                    className="options-selectors">
                    <option value="Sim">Concluida</option>
                    <option value="Não">Não Concluida</option>
                </select>
                <button onClick={(e) => EditFunc(e)}>Editar</button>
             </form>
        </div>
    )
}


export default TaksDetails;