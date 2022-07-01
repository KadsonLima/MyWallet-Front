import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {Content, Tipo, Title, Transferencias, Saldo, Buttons, Branco} from './styles';
import axios from "axios";
import Exit from "../../assets/Vector.png";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai'

function Home() {
  const [form, setForm] = useState(null);
  const [saldo, setSaldo] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/home").then((e) => {
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
        <span>MyWallet</span>
        <img src={Exit} alt={Exit}/>
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
