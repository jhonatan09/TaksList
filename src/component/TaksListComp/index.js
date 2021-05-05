import React, {useContext} from 'react';
import {DataContext} from '../../store';
import {Link} from 'react-router-dom';

const TaksListComp = ({item}) => {

    const {dadosArr} = useContext(DataContext)

    console.log(item)

    const handleDetele = (id) => {
        dadosArr.splice(id, 1);
        const newObj = dadosArr;
        localStorage.removeItem('@Question:Task');
        localStorage.setItem('@Question:Task', JSON.stringify(newObj));
        window.location.reload();
    }
    return (
        <>
            {item.map((items, index) => {
                return (
                    <div key={index} className="info-list">
                        <li className="info-data info-data_red">
                            <label>
                                Tarefa:
                            </label>
                            {items.name}
                        </li>
                        <li className="info-data info-data_red">
                            <label>
                                Descrição:
                            </label>
                            {items.description}
                        </li>
                        <li className="info-data info-data_red">
                            <label>
                                Concluida:
                            </label>
                            {items.complete === "Sim"? 'Sim': 'Não'}
                        </li>
                        <li className="info-actions">
                            <span onClick={() => handleDetele(index)}>
                                Deletar
                            </span>
                            <Link to={{ pathname:"/Dashboard/Takes/Details", state: {items} }}>
                                Editar
                            </Link>
                        </li>
                    </div>
                )
            })}
        </>
    )
}

export default TaksListComp;