import React from 'react'
import { Tab, Tabs, Form } from 'react-bootstrap'
import './CargaResultados.css'

const CargaResultados = () => {
  return (
    <Tabs
      defaultActiveKey="hemograma" 
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="hemograma" title="Hemograma">
        <div>
          <h4>Hemograma</h4>
          <div className="container">
            
            <Form>
              <Form.Group className="row align-items-center mb-3">

                <div className='col-sm-4 d-flex align-items-center'>
                <Form.Label className="me-2 mb-0">Eritrocitos</Form.Label>  
                 <Form.Control type="text" placeholder="Ingrese valor" />
                </div>
                
                <div className="col-sm-4 text-muted">
                  <small>4.5 - 6.0 millones/µL</small>
                </div>
              </Form.Group>

              <Form.Group className="row align-items-center mb-3">
                <Form.Label className="col-sm-4 col-form-label">Hematocrito</Form.Label>
                <div className="col-sm-4">
                  <Form.Control type="text" placeholder="Ingrese valor" />
                </div>
                <div className="col-sm-4 text-muted">
                  <small>40 - 50 %</small>
                </div>
              </Form.Group>

              <Form.Group className="row align-items-center mb-3">
                <Form.Label className="col-sm-4 col-form-label">Hemoglobina</Form.Label>
                <div className="col-sm-4">
                  <Form.Control type="text" placeholder="Ingrese valor" />
                </div>
                <div className="col-sm-4 text-muted">
                  <small>13.5 - 17.5 g/dL</small>
                </div>
              </Form.Group>

              <Form.Group className="row align-items-center mb-3">
                <Form.Label className="col-sm-4 col-form-label">Leucocitos</Form.Label>
                <div className="col-sm-4">
                  <Form.Control type="text" placeholder="Ingrese valor" />
                </div>
                <div className="col-sm-4 text-muted">
                  <small>4.000 - 11.000 /mm³</small>
                </div>
              </Form.Group>
            </Form>
          </div>

          <h4>Índices Hematimétricos</h4>
          <div className="container">
       
          </div>
        </div>
      </Tab>

      <Tab eventKey="perfil-glucemico" title="Perfil Glucemico">
        <div className="container">
          <p>Tab content for Perfil Glucémico</p>
        </div>
      </Tab>

      <Tab eventKey="perfil-renal" title="Perfil Renal">
        <div className="container">
          <p>Tab content for Perfil Renal</p>
        </div>
      </Tab>

      <Tab eventKey="perfil-hepatico" title="Perfil Hepatico">
        <div className="container">
          <p>Tab content for Perfil Hepático</p>
        </div>
      </Tab>

      <Tab eventKey="perfil-lipidico" title="Perfil Lipidico">
        <div className="container">
          <p>Tab content for Perfil Lipídico</p>
        </div>
      </Tab>

      <Tab eventKey="hormonas" title="Hormonas">
        <div className="container">
          <p>Tab content for Hormonas</p>
        </div>
      </Tab>

      <Tab eventKey="orina" title="Orina">
        <div className="container">
          <p>Tab content for Orina</p>
        </div>
      </Tab>

      <Tab eventKey="coagulacion" title="Coagulación">
        <div className="container">
          <p>Tab content for Coagulación</p>
        </div>
      </Tab>

      <Tab eventKey="otros-electrolitos" title="Otros Electrolitos">
        <div className="container">
          <p>Tab content for Otros Electrolitos</p>
        </div>
      </Tab>

      <Tab eventKey="perfil-hierro" title="Perfil de Hierro">
        <div className="container">
          <p>Tab content for Perfil de Hierro</p>
        </div>
      </Tab>

      <Tab eventKey="personalizado" title="Personalizado">
        <div className="container">
          <p>Tab content for Personalizado</p>
        </div>
      </Tab>
    </Tabs>
  );
};

export default CargaResultados;
