import styled from "styled-components";


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Transferencias = styled.div`
  font-family: "Raleway";
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 13px;
  padding: 20px 13px;
  overflow: auto;
  div{
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
    span{
      color: #C6C6C6;
    }
  }
  position: relative;
`;

const Tipo = styled.div`
  display: flex;
  justify-content: end;
  color: ${props=>(props.tipo === 0)? '#03AC00': '#C70000'};


`
const Saldo = styled.footer`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  position: sticky;
  bottom: -20px ;
  background-color: white;
  span{
    font-weight: 700;
    font-size: 17px;
  }
`


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
const Buttons = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  gap: 0 15px;

  a{
    width: 50%;
      height: 100%;
      font-size: 17px;
      color: white;
      font-family: "Saira Stencil One", display;
      background-color: #a328d6;
      border-radius: 5px;
      text-decoration: none;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 17px;
    }

    
    
     
  
  
`;

export {Content, Tipo, Title, Transferencias, Saldo, Buttons};
