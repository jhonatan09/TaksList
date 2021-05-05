import React, {useState} from 'react'

const DataContext = React.createContext();


function DataContextProvider(props) {
    const [newArr, setNewArr] = useState({name: 'Jhonatan', password: '12345'})
    const [changeFordata, setChangeForData] = useState(false)
    const [changeOptionsView, setChangeOptionsView] = useState('Todos')


    let dados = localStorage.getItem('@Question:Task');
    let dadosArr = JSON.parse(dados)

    var filterYes = dadosArr.filter(function(elem) { return elem.complete === "Sim"; })[0];
    console.log(filterYes)
    var arrForYes = []

    var filterNo = dadosArr.filter(function(elem) { return elem.complete === "Não"; })[0];
    console.log(filterNo)
    var arrForNo = []

    const ConcluidasFunc = () => {
     
      arrForYes.push(filterYes)
      setChangeOptionsView("Sim")
      console.log(arrForYes, filterYes)
    }

    const NConcluidasFunc = () => {
      arrForNo.push(filterNo)
      setChangeOptionsView("Não")
    }

 




    return (
        <DataContext.Provider value={{newArr, setNewArr, dadosArr, dados, setChangeForData, changeOptionsView, setChangeOptionsView, ConcluidasFunc, NConcluidasFunc, filterYes, filterNo, arrForNo,arrForYes}}>
            {props.children}
        </DataContext.Provider>
    )
}


export {DataContextProvider, DataContext};