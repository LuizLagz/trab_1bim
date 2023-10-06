import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaMenu from './telasCadastro/TelaMenu';
import TelaCadCliente from './telasCadastro/TelaCadCliente'
import TelaCadFornecedor from './telasCadastro/TelaCadFornecedor'
import TelaCadProduto from './telasCadastro/TelaCadProduto';
import TelaCadCategoriaProduto from './telasCadastro/TelaCadCategoriaProduto';

export default function App() {
  
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>  
          <Route path='/trab_1bim' element={<TelaMenu/>}/>
          <Route path='/cadCliente' eylement={<TelaCadCliente/>}/>
          <Route path='/cadFornecedor' element={<TelaCadFornecedor/>}/>
          <Route path='/cadProduto' element={<TelaCadProduto/>}/>
          <Route path='/cadCategoria' element={<TelaCadCategoriaProduto/>}/>
        </Routes>     
      </BrowserRouter>
    </div>
  );

}
