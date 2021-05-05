import React, {useState, useContext,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {DataContext} from '../../store'
import './styles.scss'

function Order() {
    const {dadosArr, dados, setChangeForData} = useContext(DataContext)
    const [datas, setDatas] = useState({id: 1, name: '', description: '', complete: "Não"});
    const [test,setTest] = useState([])
    const [countId, setCountId] = useState(2)
   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatas({...datas, [name]:value});
    }


    
    

    useEffect(() => {
        if(dados != null){
            setTest(dadosArr)
        }
    
        },[])


    

    const send = (e) => {
        e.preventDefault();
        setChangeForData(current => !current)
        setCountId( current => current + 1)
        setDatas({...datas, id :countId})
        
        if(datas.name != null && datas.description != null){
            setTest([...test, datas]);
            localStorage.setItem('@Question:Task', JSON.stringify(test));
        }
        console.log(test)

        
    }

    return (
        <div className="order">
            <h1>Criar nova tarefa</h1>
             <form className="form">
                <div className="input-data">
                    <label>Nome da tarefa:</label>
                    <input value={datas.name} name="name" onChange={handleChange} required/>
                </div>
                <div className="input-data">
                    <label>Descrição:</label>
                    <textarea value={datas.description} name="description" onChange={handleChange} style={{ height: 100, width: 270 }} required/>
                </div>
                <button onClick={(e) => send(e)}>Enviar</button>
             </form>
        </div>
    )
}

export default Order;
