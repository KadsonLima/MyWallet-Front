import Login from "./login";
import Cadastro from "./cadastro";
import Home from "./home";
import Trade from "./trade";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/trade/:trade" element={<Trade/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
