import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { Paragrafo, FormLogin, Title, Content} from './styles';

function Cadastro(){
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    function atribuirDados(event){
        setForm(
            {...form, [event.target.name]: event.target.value}
        )
    }

    function submitForm(event){
        event.preventDefault();
        axios.post("http://localhost:5000/cadastro", form)
            .then((e)=>{console.log(e)
            navigate("/");
                
            }).catch((e)=>{console.log(e)})
    }

    return (
        
        <Content>
        <Title>MyWallet</Title>
        <FormLogin onSubmit={(e)=>{submitForm(e)}}>
            <input placeholder='Nome' type="name" name="name" onChange={(e)=>{atribuirDados(e)}}></input>
            <input placeholder='E-mail' type="email" name="email" onChange={(e)=>{atribuirDados(e)}}></input>
            <input placeholder='Senha' type="password" name="password" onChange={(e)=>{atribuirDados(e)}}></input>
            <input placeholder='Confirme a senha' type="password" name="repeat_password" onChange={(e)=>{atribuirDados(e)}}></input>
            <input type="submit" value="Cadastrar"></input>
        </FormLogin>
        <Link to="/" style={{textDecoration:'none'}}><Paragrafo>Já tem uma conta? Entre agora!</Paragrafo></Link>
    </Content>
    )
}

export default Cadastro;