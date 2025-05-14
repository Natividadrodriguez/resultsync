import React from 'react'
import { Tab, Tabs, Form } from 'react-bootstrap'
import './CargaResultados.css'
import NavBar from "../NavBar/NavBar";


const CargaResultados = () => {
  return (
    <>
      <NavBar />
     <Tabs
      defaultActiveKey="datos-paciente" 
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="datos-paciente" title="Datos del Paciente">
        <div>
          <h4>Datos del Paciente</h4>
        </div>
  <div className="container">
    
    <Form>
      <Form.Group className="row align-items-center mb-3">
        <div className="col-lg-4 col-md-8 d-flex align-items-center">
          <Form.Label className="me-2 mb-0 fs-5" style={{ minWidth: '130px' }}>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese nombre" />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className="col-lg-4 col-md-8 d-flex align-items-center">
          <Form.Label className="me-2 mb-0 fs-5" style={{ minWidth: '130px' }}>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese apellido" />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className="col-lg-4 col-md-8 d-flex align-items-center">
          <Form.Label className="me-2 mb-0 fs-5" style={{ minWidth: '130px' }}>DNI</Form.Label>
          <Form.Control type="text" placeholder="Ingrese DNI" />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className="col-lg-4 col-md-8 d-flex align-items-center">
          <Form.Label className="me-2 mb-0 fs-5" style={{ minWidth: '130px' }}>Fecha de ingreso</Form.Label>
          <Form.Control type="date" />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className="col-lg-4 col-md-8 d-flex align-items-center">
          <Form.Label className="me-2 mb-0 fs-5" style={{ minWidth: '130px' }}>N° de protocolo</Form.Label>
          <Form.Control type="text" placeholder="Ingrese número de protocolo" />
        </div>
      </Form.Group>
        <Form.Group className="row align-items-center mb-3">
        <div className="col-lg-4 col-md-8 d-flex align-items-center">
          <Form.Label className="me-2 mb-0 fs-5" style={{ minWidth: '130px' }}>Solicitante</Form.Label>
          <Form.Control type="text" placeholder="Ingrese solicitante" />
        </div>
      </Form.Group>
    </Form>
  </div>
</Tab>
     <Tab eventKey="hemograma" title="Hemograma">
  <div>
    <h4>Hemograma</h4>
    <div className="container">
      <Form>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Eritrocitos</Form.Label> 
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Hombres: 4.500.000-5.900.000
            </div>
            <div style={{ fontSize: '1rem', color: '#000' }}>
            Mujeres: 4.000.000-5.200.000
            </div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
          <Form.Label className="me-2 mb-0 fs-5">Hematocrito</Form.Label>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Hombres: 40-52 %</div>
            <div style={{ fontSize: '1rem', color: '#000' }}>Mujeres: 36-45 %</div>
          </div>
          
          
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
          <Form.Label className="me-2 mb-0 fs-5">Hemoglobina</Form.Label>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Hombres: 13-18 g/dl</div>
            <div style={{ fontSize: '1rem', color: '#000' }}>Mujeres: 12-15 g/dl</div>
          </div>
          
          
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
          <Form.Label className="me-2 mb-0 fs-5">Leucocitos</Form.Label> 
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>4.000-10.000/µL</div>
          </div>
        </Form.Group>
      </Form>
    </div>

    <h4>Índices Hematimétricos</h4>
    <div className="container">
      <Form>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
          <Form.Label className="me-2 mb-0 fs-5">VCM</Form.Label> 
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>80-100 fl</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">HCM</Form.Label>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>27,5-33,2 pg</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">CHCM</Form.Label> 
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>32-36 %</div>
          </div>
        </Form.Group>
      </Form>
    </div>

    <div>
      <h4>Fórmula Leucocitaria</h4>
    </div>
    <div className="container">
      <Form>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Cayados</Form.Label> 
            </div>
            
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>0-1 %</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Neutrófilos</Form.Label> 
            </div>
          
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>50-65%</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Eosinófilos</Form.Label>
            </div>
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>0-4 %</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Basófilos</Form.Label>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>0-1 %</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Linfocitos</Form.Label> 
            </div>
            
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>30-45 %</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div></div>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Monocitos</Form.Label>  
            </div>
            
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>2-8%</div>
          </div>
        </Form.Group>
      </Form>
    </div>
  </div>
</Tab>

      <Tab eventKey="perfil-glucemico" title="Perfil Glucemico">
        <h4>Perfil Glucemico</h4>
    <div className="container">
      <Form>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
          <Form.Label className="me-2 mb-0 fs-5">Glucemia</Form.Label> 
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>70-110 mg/dl</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Insulina</Form.Label>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>5-15 mUI/mL</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Indice HOMA</Form.Label> 
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Normal: &lt;2,5 </div>
            <div style={{ fontSize: '1rem', color: '#000' }}>Riesgo intermedio: 1,5-2,4</div>
            <div style={{ fontSize: '1rem', color: '#000' }}>Resistencia a la Insulina:&gt;2,7 </div>
          </div>
          
        </Form.Group>
         <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Hemoglobina <br/>Glicosilada</Form.Label> 
            <div className='solo-en-pdf'>Metodo: Inmunoturbidimetrico</div>
            </div>
            
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>4.8 a 5.9% de Hb total</div>
            
          </div>
          
          
        </Form.Group>
      </Form>
     
    </div>     

      
      </Tab>

      <Tab eventKey="perfil-renal" title="Perfil Renal">
        <h4>Perfil Renal</h4>
    <div className="container">
      <Form>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
          <Form.Label className="me-2 mb-0 fs-5">Urea</Form.Label> 
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>15-45 mg/dl</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Creatinina</Form.Label>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Hombres: 0,7-1,3 mg/dl</div>
            <div style={{ fontSize: '1rem', color: '#000' }}>Mujeres: 0,6- 1,1mg/dl</div>
          </div>
        </Form.Group>
          <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Uricemia</Form.Label>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>3.40-7.00 mg/dl</div>
          
          </div>
        </Form.Group>

      </Form>
     
    </div>     
    <h4>Ionograma</h4>
    <div className="container">
      <Form>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
          <Form.Label className="me-2 mb-0 fs-5">Sodio</Form.Label> 
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>135-145 mEq/L</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Potasio</Form.Label>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>3,4-4,5 mEq/L</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Cloro</Form.Label> 
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>95-105 mEq/L </div>
          </div>
          
        </Form.Group>
      </Form>
     
    </div>     


      </Tab>

      <Tab eventKey="perfil-hepatico" title="Perfil Hepatico">
        <h4>Perfil Hepatico</h4>
    <div className="container">
      <Form>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
          <Form.Label className="me-2 mb-0 fs-5">G.O.T.</Form.Label> 
          <div className='solo-en-pdf'>Metodo: <br/>
             Cinetico</div>
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Hasta 39 UI/L</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">G.P.T.</Form.Label>
            <div className='solo-en-pdf'>Metodo: <br/>
             Cinetico</div>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Hasta 49 UI/L</div>
          </div>
        </Form.Group>
      <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">G.G.T.</Form.Label>
            <div className='solo-en-pdf'>Metodo: <br/>
             Cinetico</div>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Hasta 41 UI/L</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Fostasa <br/> Alcalina</Form.Label> 
            <div className='solo-en-pdf'>Metodo: <br/>
             Cinetico</div>
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>40-190 UI/L </div>
          </div>
          
        </Form.Group>
         <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Bilirrubina <br/> Total</Form.Label> 
             <div className='solo-en-pdf'>Metodo: DPD</div>
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Hasta 1.0 mg/dl</div>
          </div>
          
        </Form.Group>
         <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Bilirrubina <br/>Indirecta</Form.Label> 
            <div className='solo-en-pdf'>Metodo: DPD</div>
            </div>
            
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Hasta 0.20 mg/dl</div>
            
          </div>
          
          
        </Form.Group>
         <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Bilirrubina <br/> Directa</Form.Label> 
             <div className='solo-en-pdf'>Metodo: DPD</div>
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>95-105 mEq/L </div>
          </div>
          
        </Form.Group>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Uricemia</Form.Label> 
             <div className='solo-en-pdf'>Metodo: <br/>
             Enzimatico</div>
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>3.40-7.00 mg/dl</div>
          </div>
          
        </Form.Group>

        
        
      </Form>
     
    </div>     
        
      </Tab>

      <Tab eventKey="perfil-lipidico" title="Perfil Lipidico">
          <h4>Perfil Lipidico</h4>
    <div className="container">
      <Form>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
          <Form.Label className="me-2 mb-0 fs-5">Colesterol <br/>Total</Form.Label> 
          <div className='solo-en-pdf'>Metodo: <br/>
             Enzimatico</div>
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Menor a 200 mg/dl</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Colesterol <br/> HDL</Form.Label>
            <div className='solo-en-pdf'>Metodo: <br/>
             Enzimatico</div>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Mayor a 40 mg/dl</div>
          </div>
        </Form.Group>
      <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Colesterol <br/>LDL</Form.Label>
            <div className='solo-en-pdf'>Metodo: <br/>
             Enzimatico</div>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Menor a 130 mg/dl</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Trigliceridos</Form.Label> 
            <div className='solo-en-pdf'>Metodo: <br/>
             Enzimatico</div>
            </div>
             
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Menor a 150 mg/dl</div>
          </div>
          
        </Form.Group>

        </Form>
        </div>



         
      </Tab>

      <Tab eventKey="hormonas" title="Hormonas">
        <div className="container">
          <p>Tab content for Hormonas</p>
        </div>
      </Tab>

      <Tab eventKey="orina" title="Orina">
         <div>
      <h4>Orina Completa</h4>
    </div>
    <br />
    <div><h5>Examen Fisico-quimico</h5></div>
    <div className="container">
      <Form>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Color</Form.Label> 
            </div>
            
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Aspecto</Form.Label> 
            </div>
          
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">PH</Form.Label>
            </div>
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Densidad</Form.Label>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
        </Form.Group>

      
      </Form>
    </div>
     <div><h5>Examen Citologico</h5></div>
    <div className="container">
      <Form>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Celulas</Form.Label> 
            </div>
            
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Leucocitos</Form.Label> 
            </div>
          
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
          
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Hematies</Form.Label>
            </div>
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Mucus</Form.Label>
            </div>
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
        </Form.Group>

      
      </Form>
    </div>

    <div>
      <h5>Observaciones</h5>
    </div>
   <div className="container">
      <Form>
       <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
           
              
            <Form.Control type="text" placeholder="Ingrese valor" />
          </div>
        </Form.Group>
  
    </Form>
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
    <div className="botones-container mt-5">
    <button className="boton-formulario">
      📄 Generar PDF
    </button>
    <button className="boton-formulario" >
      ✉️ Enviar por Email
    </button>
  </div>
    </>
   
  );
};

export default CargaResultados;
