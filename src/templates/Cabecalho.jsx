import Alert from 'react-bootstrap/Alert';

export default function Cabecalho(props){

    return (
        <Alert variant="dark" style={{fontSize: "20px", textAlign: "center"}}>
            {props.conteudo || "Cabeçalho do Sistema"}
        </Alert>
    );
}
