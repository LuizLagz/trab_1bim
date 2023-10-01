import Cabecalho from "./Cabecalho.jsx"
import Rodape from "./Rodape.jsx"
import Menu from "./Menu.jsx"


export default function Pagina(props){
    return(
        <>
            <Cabecalho conteudo="Sistema de Vendas de Roupas"/>
            <Menu />
            <div>
                {
                    //Filhos da página = props children
                }
                {props.children}
            </div>
            <Rodape conteudo="Linguagens de Programação II"/>
        </>
    )
}