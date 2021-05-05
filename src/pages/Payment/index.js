import React, {useContext, useState, useEffect} from 'react';
import './styles.scss';
import {DataContext} from '../../store';

import TaksListComp from '../../component/TaksListComp'

function Payment() {
    const {dadosArr, changeOptionsView, setChangeOptionsView, arrForYes, arrForNo, ConcluidasFunc, NConcluidasFunc, filterYes, filterNo} = useContext(DataContext)
    const [installments, setInstallments] = useState(dadosArr)
    
    
    return (
        <div className="payment-page">
            <h1>Minhas Tarefas</h1>
            <ul className="list-options-view">
                <li  onClick={() => setChangeOptionsView("Todos")}>Todos</li>
                <li onClick={ () => ConcluidasFunc()}>Concluidas</li>
                <li onClick={() => NConcluidasFunc()}>Não Concluidas</li>
            </ul>
                {!installments
                    ? ''
                    :
                    changeOptionsView === "Todos"? 
                    <ul>
                        <TaksListComp item={installments} />
                    </ul>
                    : ''
                }
                {!filterYes
                    ? ''
                    :
                    changeOptionsView === "Sim"? 
                    console.log(arrForYes)
                    : ''
                }
                {!filterNo
                    ? ''
                    :
                    changeOptionsView === "Não"? 
                    <ul>
                        <TaksListComp item={arrForNo} />
                    </ul>
                    : ''
                }
        </div>
    )
}


export default Payment;
