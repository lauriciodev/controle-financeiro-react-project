import React  from "react";

import Item from "../items";
import { 
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
    
} from "react-icons/fa";

import * as C from "./styles"

const Resume = ( income,expanse, total) =>{
    return(
        <C.Container>
            <Item Title="Entradas" Icon={FaRegArrowAltCircleDown} Value={income} />
            <Item Title="Saídas" Icon={FaRegArrowAltCircleUp} Value={expanse} />
            <Item Title="Total" Icon={FaDollarSign} Value={total} />
        </C.Container>
    )
}

export default Resume;