import React from "react";
import { Link } from "react-router-dom";
import { Button, Card} from 'react-bootstrap';
import './HomePage.css'
import logo from '../Assets/logo.jpg'

const HomePage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Card className="text-center card-border card-shadow">
      <Card.Header className="card-hyf"><img
            src={logo}  
            alt="Logo"
            style={{ width: '40%', height: 'auto', borderRadius: '5%'}} 
          /></Card.Header>
      <Card.Body className="card-body-inicio">
        <Card.Title><h1>Carga de Resultados</h1></Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button className="boton-ingresar">Ingresar</Button>
      </Card.Body>
      <Card.Footer className="text-muted card-hyf"><small>ResultSync © 2025</small></Card.Footer>
    </Card>
    </div>
   
  )
}

export default HomePage
