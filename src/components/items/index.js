import React  from "react";
import * as C from "./styles"

const item = ({Title,Icon, Value}) =>{
    return(
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{Title}</C.HeaderTitle>
                <Icon/>
            </C.Header>
            <C.Total>{Value}</C.Total>
        </C.Container>
    )
}

export default item;