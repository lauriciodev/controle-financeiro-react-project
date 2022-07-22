import styled  from "styled-components";

export const container = styled.div`
max-width: 1120px;
margin: 20px auto;
width: 98%;
background-color:  #4e0c5a;
box-shadow: 0px 0px 5px #0000 ;
border-radius: 5px;
display: flex;
justify-content:space-around;
padding: 14px 0;
gap: 10px;

@media (max-width: 750px){
    display: grid;
}


`;

export const inputContent = styled.div`
display: flex;
flex-direction: column;
`;

export const input = styled.input`
outline: none;
border-radius: 4px;
padding: 6px 10px;
font-size: 15px;
border: 1px solid  #ac2ac3;
` 


export const RadioGroup = styled.div`
display: flex;
align-items: center;
 
 input{
    margin-left: 20px;
    accent-color: black;
    margin-top: 0;
 }
`

export const Label = styled.label`
color:white;
font-weight: 300;
padding: 3px;
`;

export const Button = styled.button`
padding: 5px 10px;
border: none;
border-radius: 5px;
cursor: pointer;
color: white;
background-color: #1dca2c;
transition: all .4s;

&:hover{
    background-color: #ca11ca;
    border: 1px solid white;

}

`