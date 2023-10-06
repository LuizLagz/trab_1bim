import { Container, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap"
import {useState} from 'react'

export default function FormCadCategoriaProduto(props){

    const categoriaVazia = {
        nome: ''
    };

    const categoriaEstadoInicial = props.categoriaParaEdicao;
    const [categoria, setCategoria] = useState(categoriaEstadoInicial);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudanca(e){
        const componente = e.currentTarget;

        setCategoria({...categoria, [componente.name]: [componente.value]});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget;

        if(form.checkValidity()){
            if(!props.modoEdicao)
            {
                props.setListaCategorias([...props.listaCategorias, categoria]);
            }
            else
            {
                const novaLista = props.listaCategorias.map((item)=>{
                    if(item.nome === props.categoriaParaEdicao.nome)
                        return categoria;
                    else
                        return item;
                });
                
                props.setListaCategorias(novaLista);
                props.setModoEdicao(false);
                props.setCategoriaParaEdicao(categoriaVazia);

            }

            

            props.exibirFormulario(false);

            setCategoria(categoriaVazia);
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
                                label="Nome:"
                                className="mb-3">
                                <Form.Control type="text"
                                 placeholder="Informe o nome completo"
                                  id="nome"
                                  name="nome"
                                  value = {categoria.nome}
                                  onChange = {manipularMudanca}
                                  required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
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