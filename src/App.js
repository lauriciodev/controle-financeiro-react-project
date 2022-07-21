import React,{useState, useEffect} from "react"


import Form from "./components/Form"
import Header from "./components/Header"
import Resume from "./components/Resume"
import Global from "./styles/global"
export default function App(){

    const data = localStorage.getItem("transactions");
    const [transactionsList,setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );
    
    const [income, setIncome] = useState(0);
    const [expanse, setExpanse] =  useState(0);
    const [total, setTotal] = useState(0);
    
    useEffect(()=>{
    const amountExpanse = transactionsList
    .filter((item) => item.expanse)
    .map((transactions) => Number(transactions.amount));


   const amountIncome = transactionsList
   .filter((item) => !item.expanse)
   .map((transactions) => Number(transactions.amount));

   const expanse = amountExpanse.reduce((acc,cur) => acc + cur,0).toFixed(2);
   const income = amountIncome.reduce((acc,cur) => acc + cur,0).toFixed(2);

 
   const total = Math.abs(income - expanse).toFixed(2);

   setIncome(`R$ ${income}`);
   setExpanse(`R$ ${expanse}`)
   setTotal(`${Number(income) < Number(expanse) ? "-": ""}R$ ${total} `)
    },[transactionsList])


    const handleAdd = (transactions) =>{
        const newArrayTransactions = [...transactionsList,transactions];

        setTransactionsList(newArrayTransactions);

        localStorage.setItem("transactions",JSON.stringify(newArrayTransactions))
    }



    return(
        <>
        <Header/>
        <Resume income={income} expanse={expanse}  total={total} />
        <Form handleAdd={handleAdd} />
        <Global/>
        </>

    )
}