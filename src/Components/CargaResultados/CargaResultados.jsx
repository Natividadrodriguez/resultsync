import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import './CargaResultados.css'

const CargaResultados = () => {
  return (
 

<Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="hemograma" title="Hemograma">
        Tab content for Home
      </Tab>
      <Tab eventKey="perfil-glucemico" title="Perfil Glucemico" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="perfil-renal" title="Perfil Renal" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="perfil-hepatico" title="Perfil Hepatico">
        Tab content for Profile
      </Tab>
      <Tab eventKey="perfil-lipidico" title="Perfil Lipidico" >
        Tab content for Contact
      </Tab>
       <Tab eventKey="hormonas" title="Hormonas" >
        Tab content for Contact
      </Tab>
       <Tab eventKey="orina" title="Orina" >
        Tab content for Contact
      </Tab>
       <Tab eventKey="coagulacion" title="Coagulación" >
        Tab content for Contact
      </Tab>
       <Tab eventKey="otros-electrolitos" title="Otros Electrolitos" >
        Tab content for Contact
      </Tab>
       <Tab eventKey="perfil-hierro" title="Perfil de Hierro" >
        Tab content for Contact
      </Tab>
       <Tab eventKey="personalizado" title="Personalizado" >
        Tab content for Contact
      </Tab>
      
      
    </Tabs>
  )
}

export default CargaResultados
