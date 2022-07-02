import { Link } from "react-router-dom";
import { useState, useEffect , useContext} from "react";
import {Content, Tipo, Title, Transferencias, Saldo, Buttons, Branco} from './styles';
import axios from "axios";
import Exit from "../../assets/Vector.png";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';
import {TokenContext} from '../../context/TokenContext';

function Home() {
  const {token, header} = useContext(TokenContext);
  const [form, setForm] = useState(null);
  const [saldo, setSaldo] = useState(null);


  useEffect(() => {
    console.log("esse é o token", token, header)
    axios.get("https://mywalletkash.herokuapp.com/home", header).then((e) => {
      setForm(e.data.kaio);
      setSaldo(e.data.saldo);
      
    });
  }, []);


  const trades =
    form ?(<Transferencias>{
    form.map((trade, index) => {
      const valor = parseFloat(trade.valor).toFixed(2);

      return (
        <div key={index}>
          <div>
            <span>{trade.dia}</span>
            <p>{trade.nome}</p>
          </div>
          <Tipo tipo={trade.tipo}>{(valor)}</Tipo>
        </div>
      );
    })}<Saldo><span>Saldo</span>{saldo.toFixed(2)}</Saldo></Transferencias>):(<Branco>Não há registros de entrada ou saída</Branco>);
  return (
    <Content>
      <Title>
        <span>Olá, {token.name}</span>
        <img src={Exit} alt={Exit} />
      </Title>
      {trades}
      <Buttons>
      <Link to={"/trade/entrada"}><AiOutlinePlusCircle className="react-icons"/><span>Nova<br/>Entrada</span></Link>
      <Link to={"/trade/saida"}><AiOutlineMinusCircle/><span>Nova<br/>Saida</span></Link>
      </Buttons>
    </Content>
  );
}



export default Home;
