import React, {useState} from "react";

import * as C from "./styles"

const Form = ({handleAdd}) =>{
  
    const [desc, setDesc] = useState("");
    const [amount,setAmaunt] = useState("");
    const [isExpress, setIsExpress] = useState(false);


    const generateID = () => Math.round(Math.random() * 1000)

 const handleSave = () => {
    if(!desc || !amount){
        alert("informe a descrição do valor !")
        return;  
    }else if(amount < 1){
        alert("o valor deve ser positivo !");
        return;
    }

    const transactions = {
      id:generateID(),
      desc:desc,
      amount:desc,
      expanse: isExpress
   
    }
    handleAdd(transactions);
    setAmaunt("")
    setDesc('')

 };



 


    return(
       <C.container>
        <C.inputContent>
         <C.Label>Descrição</C.Label>
         <C.input value={desc} onChange={(e)=> setDesc(e.target.value)} />
        </C.inputContent>

        <C.inputContent>
         <C.Label>Valor</C.Label>
         <C.input type="number" value={amount} onChange={(e)=> setAmaunt(e.target.value)} />
        </C.inputContent>

        <C.RadioGroup>
            <C.input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={()=> setIsExpress(!isExpress)}
           />
        <C.Label htmlFor="rIncome">Entrada</C.Label>
              
        <C.input
            type="radio"
            id="rExpansive"
            defaultChecked
            name="group1"
            onChange={()=> setIsExpress(!isExpress)}
           />
        <C.Label htmlFor="rExpansive">Saida</C.Label>

        </C.RadioGroup>
          <C.Button onClick={handleSave}>ADICIONAR</C.Button>
       </C.container>
    ) 
}

export default Form;