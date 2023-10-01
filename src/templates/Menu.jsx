import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';    

export default function Menu(props){
    return (    
        <>
        <Nav className="justify-content-center" activeKey="/home" style={{fontSize: "18px"}}>
            <Nav.Item>
            <Nav.Link as = {Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>Cadastros</Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item as = {Link} to="/cadCliente">Clientes</Dropdown.Item>
                <Dropdown.Item as = {Link} to="/cadFornecedor">Fornecedores</Dropdown.Item>
                <Dropdown.Item as = {Link} to="/cadProduto">Produtos</Dropdown.Item>
                <Dropdown.Item as = {Link} to="/cadCategoria">Categorias</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-2">Operações</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
    );
  
}