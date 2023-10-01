import Pagina from "../templates/Pagina";
import FormCadProduto from "../forms/FormCadProduto"
import TabelaProdutos from "../tabelas/TabelaProdutos"
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function TelaCadProduto(props){

    const produto = {};
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaProdutos, setListaProdutos] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produtoParaEdicao, setProdutoParaEdicao] = useState({
        nome: '',
        categoria: '',
        preco: 0
    });
    
    return(
        <Container>
            <Pagina>
                {
                    exibirFormulario?<FormCadProduto    exibirFormulario = {setExibirFormulario}
                                                        listaProdutos = {listaProdutos}
                                                        setListaProdutos = {setListaProdutos}
                                                        produtoParaEdicao = {produtoParaEdicao}
                                                        setProdutoParaEdicao = {setProdutoParaEdicao}
                                                        modoEdicao = {modoEdicao}
                                                        setModoEdicao = {setModoEdicao}
                                     />
                                    :
                                    <TabelaProdutos     exibirFormulario = {setExibirFormulario}
                                                        listaProdutos = {listaProdutos}
                                                        setListaProdutos = {setListaProdutos}
                                                        produtoParaEdicao = {produtoParaEdicao}
                                                        setProdutoParaEdicao = {setProdutoParaEdicao}
                                                        modoEdicao = {modoEdicao}
                                                        setModoEdicao = {setModoEdicao}
                                     />
                }
            </Pagina>
        </Container>   
    );
}