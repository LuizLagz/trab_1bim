import Pagina from "../templates/Pagina";
import FormCadCategoriaProduto from "../forms/FormCadCategoriaProduto"
import TabelaCategoriaProduto from "../tabelas/TabelaCategoriaProduto"
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function TelaCadCategoriaProduto(props){

    const produto = {};
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaCategorias, setListaCategorias] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({
        nome: ''
    });
    
    return(
        <Container>
            <Pagina>
                {
                    exibirFormulario?<FormCadCategoriaProduto exibirFormulario = {setExibirFormulario}
                                                            listaCategorias = {listaCategorias}
                                                            setListaCategorias = {setListaCategorias}
                                                            categoriaParaEdicao = {categoriaParaEdicao}
                                                            setCategoriaParaEdicao = {setCategoriaParaEdicao}
                                                            modoEdicao = {modoEdicao}
                                                            setModoEdicao = {setModoEdicao}
                                     />
                                    :
                                    <TabelaCategoriaProduto exibirFormulario = {setExibirFormulario}
                                                    listaCategorias = {listaCategorias}
                                                    setListaCategorias = {setListaCategorias}
                                                    categoriaParaEdicao = {categoriaParaEdicao}
                                                    setCategoriaParaEdicao = {setCategoriaParaEdicao}
                                                    modoEdicao = {modoEdicao}
                                                    setModoEdicao = {setModoEdicao}
                                     />
                }
            </Pagina>
        </Container>   
    );
}