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

  //https://mywalletkash.herokuapp.com/
  //https://https://mywalletkash.herokuapp.com/

  useEffect(() => {
    axios.get("https://mywalletkash.herokuapp.com/home", header).then((e) => {
      console.log(e)
      setForm((e.data[0].trade).reverse());
      setSaldo(e.data.saldo);
    console.log("esse é o token", form)
      
    });
  }, []);


  const trades =
    (form!= null) ?(<Transferencias>{
    form.map((trade, index) => {
      const valor = parseFloat(trade.valor).toFixed(2);

      return (
        <div key={index}>
          <div>
            <span>{trade.dia}</span>
            <p>{trade.descricao}</p>
          </div>
          <Tipo tipo={trade.tipo}>{(valor)}</Tipo>
        </div>
      );
    })}<Saldo><span>Saldo</span></Saldo></Transferencias>):(<Branco>Não há registros de entrada ou saída</Branco>);
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
