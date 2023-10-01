import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaMenu from './telasCadastro/TelaMenu';
import TelaCadCliente from './telasCadastro/TelaCadCliente'
import TelaCadFornecedor from './telasCadastro/TelaCadFornecedor'

export default function App() {
  
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>  
          <Route path='/' element={<TelaMenu/>}/>
          <Route path='/cadCliente' element={<TelaCadCliente/>}/>
          <Route path='/cadFornecedor' element={<TelaCadFornecedor/>}/>
        </Routes>     
      </BrowserRouter>
    </div>
  );

}
