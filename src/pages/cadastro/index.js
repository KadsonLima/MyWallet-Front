import {Link} from 'react-router-dom';
import { Paragrafo, FormLogin, Title, Content} from './styles';

function Cadastro(){


    return (
        
        <Content>
        <Title>MyWallet</Title>
        <FormLogin>
            <input placeholder='Nome' type="name"></input>
            <input placeholder='E-mail' type="email"></input>
            <input placeholder='Senha' type="password"></input>
            <input placeholder='Confirme a senha' type="password"></input>
            <input type="submit" value="Cadastrar"></input>
        </FormLogin>
        <Link to="/" style={{textDecoration:'none'}}><Paragrafo>Já tem uma conta? Entre agora!</Paragrafo></Link>
    </Content>
    )
}

export default Cadastro;