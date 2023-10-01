import { Container, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap"
import {useState} from 'react'

export default function FormCadProduto(props){

    const produtoVazio = {
        nome: '',
        categoria: '',
        preco: 0
    };

    const produtoEstadoInicial = props.produtoParaEdicao;
    const [produto, setProduto] = useState(produtoEstadoInicial);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudanca(e){
        const componente = e.currentTarget;

        setProduto({...produto, [componente.name]: [componente.value]});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget;

        if(form.checkValidity()){
            if(!props.modoEdicao)
            {
                props.setListaProdutos([...props.listaProdutos, produto]);
            }
            else
            {
                props.setListaProdutos([...props.listaProdutos.filter((item)=> item.nome !== produto.nome), produto]);
                props.setModoEdicao(false);
                props.setProdutoParaEdicao(produtoVazio);
            }
            props.exibirFormulario(false);

            setProduto(produtoVazio);
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
                                label="Nome"
                                className="mb-3">
                                <Form.Control type="text"
                                 placeholder="Informe o nome completo"
                                  id="nome"
                                  name="nome"
                                  value = {produto.nome}
                                  onChange = {manipularMudanca}
                                  required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row> 
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="Categoria:"
                                className="mb-3">
                                <Form.Control type="text" placeholder="Categoria..."
                                id="categoria" 
                                name="categoria"
                                value = {produto.caregoria}
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
                                label="Preço:"
                                className="mb-3">
                                <Form.Control type="text" placeholder="Preço"
                                 id="preco"
                                 name="preco" 
                                 value = {produto.preco}
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