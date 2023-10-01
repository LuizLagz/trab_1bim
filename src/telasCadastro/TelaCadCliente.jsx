import Pagina from "../templates/Pagina";
import FormCadCliente from "../forms/FormCadCliente"
import TabelaClientes from "../tabelas/TabelaClientes"
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function TelaCadCliente(props){

    const cliente = {};
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaClientes, setListaClientes] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [clienteParaEdicao, setClienteParaEdicao] = useState({
        cpf: '',
        nome: '',
        estadoCivil: '',
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
                    exibirFormulario?<FormCadCliente exibirFormulario = {setExibirFormulario}
                                                     listaClientes = {listaClientes}
                                                     setListaClientes = {setListaClientes}
                                                     clienteParaEdicao = {clienteParaEdicao}
                                                     setClienteParaEdicao = {setClienteParaEdicao}
                                                     modoEdicao = {modoEdicao}
                                                     setModoEdicao = {setModoEdicao}
                                     />
                                    :
                                    <TabelaClientes exibirFormulario = {setExibirFormulario}
                                                    listaClientes = {listaClientes}
                                                    setListaClientes = {setListaClientes}
                                                    clienteParaEdicao = {clienteParaEdicao}
                                                    setClienteParaEdicao = {setClienteParaEdicao}
                                                    modoEdicao = {modoEdicao}
                                                    setModoEdicao = {setModoEdicao}
                                     />
                }
            </Pagina>
        </Container>   
    );
}