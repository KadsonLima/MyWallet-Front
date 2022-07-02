import Login from "./login";
import Cadastro from "./cadastro";
import Home from "./home";
import Trade from "./trade";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TokenProvider from "../context/TokenContext";


function App() {
  return (
    <BrowserRouter>
    <TokenProvider>
      <Routes>
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/trade/:trade" element={<Trade/>} />
      </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
