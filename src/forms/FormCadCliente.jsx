import { Container, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap"
import {useState} from 'react'

export default function FormCadCliente(props){

    const clienteVazio = {
        cpf: '',
        nome: '',
        estadoCivil: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: 'SP',
        cep: ''
    };

    const clienteEstadoInicial = props.clienteParaEdicao;
    const [cliente, setCliente] = useState(clienteEstadoInicial);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudanca(e){
        const componente = e.currentTarget;

        setCliente({...cliente, [componente.name]: [componente.value]});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget;

        if(form.checkValidity()){
            if(!props.modoEdicao)
            {
                props.setListaClientes([...props.listaClientes, cliente]);
            }
            else
            {
                props.setListaClientes([...props.listaClientes.filter((itemCliente)=> itemCliente.cpf !== cliente.cpf), cliente]);
                props.setModoEdicao(false);
                props.setClienteParaEdicao(clienteVazio);
            }
            props.exibirFormulario(false);

            setCliente(clienteVazio);
            setFormValidado(false);
        }

        setFormValidado(true);

        e.stopPropagation();
        e.preventDefault();
    }

    return(
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="CPF:"
                                className="mb-3">
                                <Form.Control
                                 type="text"
                                 placeholder="000.000.000-00"
                                 id="cpf"
                                 name="cpf"
                                 value = {cliente.cpf}
                                 onChange = {manipularMudanca}
                                 required
                                  />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CPF!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome completo:"
                                className="mb-3">
                                <Form.Control type="text"
                                 placeholder="Informe o nome completo"
                                  id="nome"
                                  name="nome"
                                  value = {cliente.nome}
                                  onChange = {manipularMudanca}
                                  required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel
                                label="Endereço:"
                                className="mb-3">
                                <Form.Control type="text" placeholder="Avenida/Rua/Alameda/Viela"
                                 id="endereco"
                                 name="endereco" 
                                 value = {cliente.endereco}
                                 onChange = {manipularMudanca}
                                 required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                label="Numero:"
                                className="mb-3">
                                <Form.Control type="text" placeholder="N°"
                                 id="numero"
                                 name="numero"
                                 value = {cliente.numero}
                                 onChange = {manipularMudanca}
                                 required
                                 />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o numero!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="Bairro:"
                                className="mb-3">
                                <Form.Control type="text" placeholder="Bairro/Vila..."
                                id="bairro" 
                                name="bairro"
                                value = {cliente.bairro}
                                onChange = {manipularMudanca}
                                required
                                 />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o numero!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="Cidade:"
                                className="mb-3">
                                <Form.Control type="text" placeholder="Cidade"
                                 id="cidade"
                                 name="cidade" 
                                 value = {cliente.cidade}
                                 onChange = {manipularMudanca}
                                 required
                                 />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o numero!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <FloatingLabel label="UF:">
                            <Form.Select aria-label="Unidades Federativas brasileiras">
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP" selected>São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="CEP:"
                                className="mb-3">
                                <Form.Control type="text"
                                 placeholder="CEP"
                                  id="cep"
                                   name="cep"
                                   value = {cliente.cep}
                                   onChange = {manipularMudanca}
                                   required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o numero!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>{props.modoEdicao?"Alterar":"Cadastrar"}</Button>
                    </Col>
                    <Col>
                        <Button type="submit" variant={"secondary"} onClick={() => {
                            props.exibirFormulario(false);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>


    );

}