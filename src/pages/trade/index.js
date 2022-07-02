import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import { useState, useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';
import styled from 'styled-components';


function Trade(){
    const { header} = useContext(TokenContext);
    const tipo = useParams();
    const [trade, setTrade] = useState({tipo:(tipo.trade === 'entrada')? 0 : 1});
    const navigate = useNavigate();

    function submitTrade(event){
        event.preventDefault();

        //setTrade({...trade, })
        console.log(trade)
        axios.post("http://localhost:5000/trade", trade, header)
            .then((e)=>{
                console.log("SHAIUSAHI", e.data)
                navigate("/home");
            })
    }


   return(
        <Content>
            <Title>{(tipo.trade==='entrada')?"Nova Entrada":"Nova Saída"}</Title>
            <Form onSubmit={(event)=>{submitTrade(event)}}>
                <input name='valor' step="any" pattern="[0-9]+([,\.][0-9]+)?" type="number" placeholder='Valor' onChange={(e)=>{setTrade({...trade, [e.target.name]:e.target.value})}}></input>
                <input name='descricao' type="text" placeholder='Descrição' onChange={(e)=>{setTrade({...trade, [e.target.name]:e.target.value})}}></input>
                <input type="submit" value={(tipo.trade==='entrada')?"Salvar Entrada":"Salvar Saída"}></input>
            </Form>
        </Content>
   )
}

const Title = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  color: white;
  font-family: "Saira Stencil One", display;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    gap: 13px;

    
`
export default Trade;