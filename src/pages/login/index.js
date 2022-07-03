import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {TokenContext} from '../../context/TokenContext';

function Login() {
    const { setToken} = useContext(TokenContext);

    const [form, setForm] = useState({});
    const navigate = useNavigate();

    function atribuirDados(event){
        setForm(
            {...form, [event.target.name]: event.target.value}
        )
    }

    function submitForm(event){
        event.preventDefault();
        axios.post("https://mywalletkash.herokuapp.com/", form)
            .then((e)=>{
            setToken(e.data)
            navigate("/home");
            localStorage.setItem('token', JSON.stringify(e.data))
            }).catch((e)=>{console.log(e)})
    }

    return (
        <Content>
            <Title>MyWallet</Title>
            <FormLogin onSubmit={(e)=>{submitForm(e)}}>
                <input name="email"  placeholder='E-mail' type="email" onChange={(e)=>{atribuirDados(e)}}></input>
                <input name="password"  placeholder='Senha' type="password" onChange={(e)=>{atribuirDados(e)}}></input>
                <input type="submit"  value="Entrar"></input>
            </FormLogin>
            <Link to="/cadastro" style={{textDecoration:'none'}}><Paragrafo>Primeira vez? Cadastre-se!</Paragrafo></Link>
        </Content>
    )
}


const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;


    
        
    
    
`
const Title = styled.div`
    font-size: 32px;
    color: white;
    font-family: 'Saira Stencil One', display;
    margin-bottom: 20px;

`

const FormLogin = styled.form`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 13px;

`
const Paragrafo = styled.p`

        font-family: 'Raleway';
        font-weight:700;
        font-size: 15px;
        color: white;
    
`

export default Login;