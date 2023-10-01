export default function Rodape(props) {

    return (
      
      <div style={{margin: "10px", textAlign: "center", fontSize: "20px"}}>

        <b>{props.conteudo || "Rodapé"}</b>

      </div>
    );
  }
