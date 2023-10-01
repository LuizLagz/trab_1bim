import Pagina from "../templates/Pagina";
import FormCadFornecedor from "../forms/FormCadFornecedor"
import TabelaFornecedores from "../tabelas/TabelaFornecedores"
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function TelaCadFornecedor(props){

    const fornecedor = {};
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaFornecedores, setListaFornecedores] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({
        cnpj: '',
        nome: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: 'SP',
        cep: ''
    });
    
    return(
        <Container>
            <Pagina>
                {
                    exibirFormulario?<FormCadFornecedor exibirFormulario = {setExibirFormulario}
                                                        listaFornecedores = {listaFornecedores}
                                                        setListaFornecedores = {setListaFornecedores}
                                                        fornecedorParaEdicao = {fornecedorParaEdicao}
                                                        setFornecedorParaEdicao = {setFornecedorParaEdicao}
                                                        modoEdicao = {modoEdicao}
                                                        setModoEdicao = {setModoEdicao}
                                     />
                                    :
                                    <TabelaFornecedores exibirFormulario = {setExibirFormulario}
                                                        listaFornecedores = {listaFornecedores}
                                                        setListaFornecedores = {setListaFornecedores}
                                                        fornecedorParaEdicao = {fornecedorParaEdicao}
                                                        setFornecedorParaEdicao = {setFornecedorParaEdicao}
                                                        modoEdicao = {modoEdicao}
                                                        setModoEdicao = {setModoEdicao}
                                     />
                }
            </Pagina>
        </Container>   
    );
}