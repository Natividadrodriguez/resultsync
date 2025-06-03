import React, {useState} from 'react'
import { Tab, Tabs, Form } from 'react-bootstrap'
import './CargaResultados.css'
import NavBar from "../NavBar/NavBar";
import datosTabs from './datosTabs'
import datosPaciente from './datosPaciente'



const CargaResultados = () => {
  const [datosPaciente, setDatosPaciente] = useState({
  "Nombre": "",
  "Apellido": "",
  "DNI": "",
  "Fecha de ingreso": "",
  "N° de protocolo": "",
  "Solicitante": ""
});

const [resultados, setResultados] = useState({
  Eritrocitos: "",
  Hematocrito: "",
  Hemoglobina: "",
  Leucocitos: "",
  VCM: "",
  HCM: "",
  CHCM: "",
  Cayados: "",
  Neutrófilos: "",
  Eosinófilos: "",
  Basófilos: "",
  Linfocitos: "",
  Monocitos: ""
});
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
          <Form.Control type="text" placeholder="Ingrese nombre"  value={datosPaciente["Nombre"]}
        onChange={(e) =>
          setDatosPaciente({ ...datosPaciente, "Nombre": e.target.value })
        } />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className="col-lg-4 col-md-8 d-flex align-items-center">
          <Form.Label className="me-2 mb-0 fs-5" style={{ minWidth: '130px' }}>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese apellido" value={datosPaciente["Apellido"]}
onChange={(e) => setDatosPaciente({ ...datosPaciente, "Apellido": e.target.value })} />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className="col-lg-4 col-md-8 d-flex align-items-center">
          <Form.Label className="me-2 mb-0 fs-5" style={{ minWidth: '130px' }}>DNI</Form.Label>
          <Form.Control type="text" placeholder="Ingrese DNI" value={datosPaciente["NombreDelCampo"]}
onChange={(e) => setDatosPaciente({ ...datosPaciente, "DNI": e.target.value })}/>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className="col-lg-4 col-md-8 d-flex align-items-center">
          <Form.Label className="me-2 mb-0 fs-5" style={{ minWidth: '130px' }}>Fecha de ingreso</Form.Label>
          <Form.Control type="date"  value={datosPaciente["Fecha de ingreso"]}
      onChange={(e) =>
        setDatosPaciente({ ...datosPaciente, "Fecha de ingreso": e.target.value })
      } />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className="col-lg-4 col-md-8 d-flex align-items-center">
          <Form.Label className="me-2 mb-0 fs-5" style={{ minWidth: '130px' }}>N° de protocolo</Form.Label>
          <Form.Control type="text" placeholder="Ingrese número de protocolo" value={datosPaciente["N° de protocolo"]}
onChange={(e) => setDatosPaciente({ ...datosPaciente, "N° de protocolo": e.target.value })} />
        </div>
      </Form.Group>
        <Form.Group className="row align-items-center mb-3">
        <div className="col-lg-4 col-md-8 d-flex align-items-center">
          <Form.Label className="me-2 mb-0 fs-5" style={{ minWidth: '130px' }}>Solicitante</Form.Label>
          <Form.Control type="text" placeholder="Ingrese solicitante" value={datosPaciente["Solicitante"]}
onChange={(e) => setDatosPaciente({ ...datosPaciente, "Solicitante": e.target.value })} />
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
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Eritrocitos}
              onChange={(e) => setResultados({ ...resultados, Eritrocitos: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>Hombres: 4.500.000-5.900.000</div>
            <div>Mujeres: 4.000.000-5.200.000</div>
          </div>
        </Form.Group>

       
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Hematocrito</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Hematocrito}
              onChange={(e) => setResultados({ ...resultados, Hematocrito: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>Hombres: 40-52 %</div>
            <div>Mujeres: 36-45 %</div>
          </div>
        </Form.Group>

       
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Hemoglobina</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Hemoglobina}
              onChange={(e) => setResultados({ ...resultados, Hemoglobina: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>Hombres: 13-18 g/dl</div>
            <div>Mujeres: 12-15 g/dl</div>
          </div>
        </Form.Group>

       
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Leucocitos</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Leucocitos}
              onChange={(e) => setResultados({ ...resultados, Leucocitos: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>4.000-10.000/µL</div>
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
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.VCM}
              onChange={(e) => setResultados({ ...resultados, VCM: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>80-100 fl</div>
          </div>
        </Form.Group>

       
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">HCM</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.HCM}
              onChange={(e) => setResultados({ ...resultados, HCM: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>27,5-33,2 pg</div>
          </div>
        </Form.Group>

       
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">CHCM</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.CHCM}
              onChange={(e) => setResultados({ ...resultados, CHCM: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>32-36 %</div>
          </div>
        </Form.Group>
      </Form>
    </div>

    <h4>Fórmula Leucocitaria</h4>
    <div className="container">
      <Form>
        
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Cayados</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Cayados}
              onChange={(e) => setResultados({ ...resultados, Cayados: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>0-1 %</div>
          </div>
        </Form.Group>

       
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Neutrófilos</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Neutrófilos}
              onChange={(e) => setResultados({ ...resultados, Neutrófilos: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>50-65%</div>
          </div>
        </Form.Group>

        
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Eosinófilos</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Eosinófilos}
              onChange={(e) => setResultados({ ...resultados, Eosinófilos: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>0-4 %</div>
          </div>
        </Form.Group>

       
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Basófilos</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Basófilos}
              onChange={(e) => setResultados({ ...resultados, Basófilos: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>0-1 %</div>
          </div>
        </Form.Group>

       
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Linfocitos</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Linfocitos}
              onChange={(e) => setResultados({ ...resultados, Linfocitos: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>30-45 %</div>
          </div>
        </Form.Group>

        
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Monocitos</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Monocitos}
              onChange={(e) => setResultados({ ...resultados, Monocitos: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div>2-8%</div>
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
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.Glucemia}
            onChange={(e) => setResultados({ ...resultados, Glucemia: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>70-110 mg/dl</div>
        </div>
      </Form.Group>

      
      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Insulina</Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.Insulina}
            onChange={(e) => setResultados({ ...resultados, Insulina: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>5-15 mUI/mL</div>
        </div>
      </Form.Group>

     
      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Indice HOMA</Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.IndiceHOMA}
            onChange={(e) => setResultados({ ...resultados, IndiceHOMA: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>Normal: &lt;2,5</div>
          <div>Riesgo intermedio: 1,5-2,4</div>
          <div>Resistencia a la Insulina: &gt;2,7</div>
        </div>
      </Form.Group>

      
      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">
              Hemoglobina <br /> Glicosilada
            </Form.Label>
            <div className='solo-en-pdf'>Metodo: Inmunoturbidimetrico</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.HemoglobinaGlicosilada}
            onChange={(e) => setResultados({ ...resultados, HemoglobinaGlicosilada: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>4.8 a 5.9% de Hb total</div>
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
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.Urea}
            onChange={(e) => setResultados({ ...resultados, Urea: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>15-45 mg/dl</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Creatinina</Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.Creatinina}
            onChange={(e) => setResultados({ ...resultados, Creatinina: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>Hombres: 0,7-1,3 mg/dl</div>
          <div>Mujeres: 0,6- 1,1 mg/dl</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Uricemia</Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.Uricemia}
            onChange={(e) => setResultados({ ...resultados, Uricemia: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>3.40-7.00 mg/dl</div>
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
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.Sodio}
            onChange={(e) => setResultados({ ...resultados, Sodio: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>135-145 mEq/L</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Potasio</Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.Potasio}
            onChange={(e) => setResultados({ ...resultados, Potasio: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>3,4-4,5 mEq/L</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Cloro</Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.Cloro}
            onChange={(e) => setResultados({ ...resultados, Cloro: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>95-105 mEq/L</div>
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
            <div className='solo-en-pdf'>Metodo: <br/>Cinetico</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.GOT}
            onChange={(e) => setResultados({ ...resultados, GOT: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>Hasta 39 UI/L</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">G.P.T.</Form.Label>
            <div className='solo-en-pdf'>Metodo: <br/>Cinetico</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.GPT}
            onChange={(e) => setResultados({ ...resultados, GPT: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>Hasta 49 UI/L</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">G.G.T.</Form.Label>
            <div className='solo-en-pdf'>Metodo: <br/>Cinetico</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.GGT}
            onChange={(e) => setResultados({ ...resultados, GGT: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>Hasta 41 UI/L</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Fostasa <br/> Alcalina</Form.Label>
            <div className='solo-en-pdf'>Metodo: <br/>Cinetico</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.FostasaAlcalina}
            onChange={(e) => setResultados({ ...resultados, FostasaAlcalina: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>40-190 UI/L</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Bilirrubina <br/> Total</Form.Label>
            <div className='solo-en-pdf'>Metodo: DPD</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.BilirrubinaTotal}
            onChange={(e) => setResultados({ ...resultados, BilirrubinaTotal: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>Hasta 1.0 mg/dl</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Bilirrubina <br/>Indirecta</Form.Label>
            <div className='solo-en-pdf'>Metodo: DPD</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.BilirrubinaIndirecta}
            onChange={(e) => setResultados({ ...resultados, BilirrubinaIndirecta: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>Hasta 0.20 mg/dl</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Bilirrubina <br/> Directa</Form.Label>
            <div className='solo-en-pdf'>Metodo: DPD</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.BilirrubinaDirecta}
            onChange={(e) => setResultados({ ...resultados, BilirrubinaDirecta: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>95-105 mEq/L</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Uricemia</Form.Label>
            <div className='solo-en-pdf'>Metodo: <br/>Enzimatico</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.UricemiaHepatico}
            onChange={(e) => setResultados({ ...resultados, UricemiaHepatico: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>3.40-7.00 mg/dl</div>
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
            <div className='solo-en-pdf'>Metodo: <br/>Enzimatico</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.ColesterolTotal}
            onChange={(e) => setResultados({ ...resultados, ColesterolTotal: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>Menor a 200 mg/dl</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Colesterol <br/> HDL</Form.Label>
            <div className='solo-en-pdf'>Metodo: <br/>Enzimatico</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.ColesterolHDL}
            onChange={(e) => setResultados({ ...resultados, ColesterolHDL: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>Mayor a 40 mg/dl</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Colesterol <br/>LDL</Form.Label>
            <div className='solo-en-pdf'>Metodo: <br/>Enzimatico</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.ColesterolLDL}
            onChange={(e) => setResultados({ ...resultados, ColesterolLDL: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>Menor a 130 mg/dl</div>
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Trigliceridos</Form.Label>
            <div className='solo-en-pdf'>Metodo: <br/>Enzimatico</div>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.Trigliceridos}
            onChange={(e) => setResultados({ ...resultados, Trigliceridos: e.target.value })}
          />
        </div>
        <div className="col-sm-4">
          <div>Menor a 150 mg/dl</div>
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
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.OrinaColor}
            onChange={(e) => setResultados({ ...resultados, OrinaColor: e.target.value })}
          />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Aspecto</Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.OrinaAspecto}
            onChange={(e) => setResultados({ ...resultados, OrinaAspecto: e.target.value })}
          />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">PH</Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.OrinaPH}
            onChange={(e) => setResultados({ ...resultados, OrinaPH: e.target.value })}
          />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Densidad</Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.OrinaDensidad}
            onChange={(e) => setResultados({ ...resultados, OrinaDensidad: e.target.value })}
          />
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
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.OrinaCelulas}
            onChange={(e) => setResultados({ ...resultados, OrinaCelulas: e.target.value })}
          />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Leucocitos</Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.OrinaLeucocitos}
            onChange={(e) => setResultados({ ...resultados, OrinaLeucocitos: e.target.value })}
          />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Hematies</Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.OrinaHematies}
            onChange={(e) => setResultados({ ...resultados, OrinaHematies: e.target.value })}
          />
        </div>
      </Form.Group>

      <Form.Group className="row align-items-center mb-3">
        <div className='col-lg-4 col-md-8 d-flex align-items-center'>
          <div style={{ minWidth: '130px', flexShrink: 0 }}>
            <Form.Label className="me-2 mb-0 fs-5">Mucus</Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.OrinaMucus}
            onChange={(e) => setResultados({ ...resultados, OrinaMucus: e.target.value })}
          />
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
          <Form.Control
            type="text"
            placeholder="Ingrese valor"
            value={resultados.OrinaObservaciones}
            onChange={(e) => setResultados({ ...resultados, OrinaObservaciones: e.target.value })}
          />
        </div>
      </Form.Group>
    </Form>
  </div>
</Tab>

      <Tab eventKey="coagulacion" title="Coagulación">
  <div>
    <h4>Coagulograma</h4>
    <div className="container">
      <Form>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">TP</Form.Label>
              <div className='solo-en-pdf'>Metodo: <br />?</div>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.TP || ''}
              onChange={(e) => setResultados({ ...resultados, TP: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>12,3-15,1 segundos</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">% de <br />Actividad</Form.Label>
              <div className='solo-en-pdf'>Metodo: <br />?</div>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.PorcentajeActividad || ''}
              onChange={(e) => setResultados({ ...resultados, PorcentajeActividad: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>&gt;70%</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">KPTT</Form.Label>
              <div className='solo-en-pdf'>Metodo: <br />?</div>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.KPTT || ''}
              onChange={(e) => setResultados({ ...resultados, KPTT: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>28,0 a 42,0 segundos</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">RIN</Form.Label>
              <div className='solo-en-pdf'>Metodo: <br />?</div>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.RIN || ''}
              onChange={(e) => setResultados({ ...resultados, RIN: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>0,9 a 1,1</div>
          </div>
        </Form.Group>

      </Form>
    </div>
  </div>
</Tab>

      <Tab eventKey="perfil-mineral" title="Perfil Mineral">
  <div>
    <h4>Perfil Mineral</h4>
    <div className="container">
      <Form>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Calcio Total</Form.Label>
              <div className='solo-en-pdf'>Metodo: <br />?</div>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.CalcioTotal || ''}
              onChange={(e) => setResultados({ ...resultados, CalcioTotal: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>8.5-10.2 mg/dL</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Calcio Ionico</Form.Label>
              <div className='solo-en-pdf'>Metodo: <br />?</div>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.CalcioIonico || ''}
              onChange={(e) => setResultados({ ...resultados, CalcioIonico: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>4.8-5.6 mg/dL</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Fosforo</Form.Label>
              <div className='solo-en-pdf'>Metodo: <br />?</div>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Fosforo || ''}
              onChange={(e) => setResultados({ ...resultados, Fosforo: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Adultos: 2.8 a 4.5 mg/dL</div>
            <div style={{ fontSize: '1rem', color: '#000' }}>Niños: 4.0 a 7.0 mg/dL</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Magnesio</Form.Label>
              <div className='solo-en-pdf'>Metodo: <br />?</div>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Magnesio || ''}
              onChange={(e) => setResultados({ ...resultados, Magnesio: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>1.7-2.2 mg/dL</div>
          </div>
        </Form.Group>
      </Form>
    </div>
  </div>
</Tab>

      <Tab eventKey="perfil-hierro" title="Perfil de Hierro">
  <div>
    <h4>Perfil de Hierro</h4>
    <div className="container">
      <Form>
        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Ferremia</Form.Label>
              <div className='solo-en-pdf'>Metodo: <br />?</div>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Ferremia || ''}
              onChange={(e) => setResultados({ ...resultados, Ferremia: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>Hombres: 75–150 mcg/dL</div>
            <div style={{ fontSize: '1rem', color: '#000' }}>Mujeres: 60–140 mcg/dL</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Ferritina</Form.Label>
              <div className='solo-en-pdf'>Metodo: <br />?</div>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Ferritina || ''}
              onChange={(e) => setResultados({ ...resultados, Ferritina: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>30-300 ng/mL</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">Transferrina</Form.Label>
              <div className='solo-en-pdf'>Metodo: <br />?</div>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.Transferrina || ''}
              onChange={(e) => setResultados({ ...resultados, Transferrina: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>204 - 360 mg/dL</div>
          </div>
        </Form.Group>

        <Form.Group className="row align-items-center mb-3">
          <div className='col-lg-4 col-md-8 d-flex align-items-center'>
            <div style={{ minWidth: '130px', flexShrink: 0 }}>
              <Form.Label className="me-2 mb-0 fs-5">% Saturacion <br />Transferrina</Form.Label>
              <div className='solo-en-pdf'>Metodo: <br />?</div>
            </div>
            <Form.Control
              type="text"
              placeholder="Ingrese valor"
              value={resultados.SaturacionTransferrina || ''}
              onChange={(e) => setResultados({ ...resultados, SaturacionTransferrina: e.target.value })}
            />
          </div>
          <div className="col-sm-4">
            <div style={{ fontSize: '1rem', color: '#000' }}>20–50%</div>
          </div>
        </Form.Group>
      </Form>
    </div>
  </div>
</Tab>

      <Tab eventKey="personalizado" title="Personalizado">
         <div>

    <div className="container">
      <Form>

        <Form.Group className="row align-items-start mb-3">
          <div className='col-md-4 col-6 mb-2 mb-md-0'>
            <Form.Control 
              type="text" 
              placeholder="Determinación" 
              className="mb-1"
            />
            
          </div>
          <div className='col-md-4 col-6 mb-2 mb-md-0'>
            <Form.Control 
              type="text" 
              placeholder="Ingrese valor" 
            />
          </div>

          <div className='col-md-4 col-6'>
            <Form.Control 
              type="text" 
              placeholder="Valores normales" 
            />
            
          </div>

          <div className='col-md-4'>
              Metodo: <br/>
              <Form.Control 
                type="text" 
                placeholder="Ingrese método" 
              />
            </div>

        </Form.Group>
 <br />
 <br />

         <Form.Group className="row align-items-start mb-3">
          <div className='col-md-4 col-6 mb-2 mb-md-0'>
            <Form.Control 
              type="text" 
              placeholder="Determinación" 
              className="mb-1"
            />
            
          </div>
          <div className='col-md-4 col-6 mb-2 mb-md-0'>
            <Form.Control 
              type="text" 
              placeholder="Ingrese valor" 
            />
          </div>

          <div className='col-md-4 col-6'>
            <Form.Control 
              type="text" 
              placeholder="Valores normales" 
            />
            
          </div>

          <div className='col-md-4'>
              Metodo: <br/>
              <Form.Control 
                type="text" 
                placeholder="Ingrese método" 
              />
            </div>

        </Form.Group>
        <br />
        <br />
        <Form.Group className="row align-items-start mb-3">
          <div className='col-md-4 col-6 mb-2 mb-md-0'>
            <Form.Control 
              type="text" 
              placeholder="Determinación" 
              className="mb-1"
            />
            
          </div>
          <div className='col-md-4 col-6 mb-2 mb-md-0'>
            <Form.Control 
              type="text" 
              placeholder="Ingrese valor" 
            />
          </div>

          <div className='col-md-4 col-6'>
            <Form.Control 
              type="text" 
              placeholder="Valores normales" 
            />
            
          </div>

          <div className='col-md-4'>
              Metodo: <br/>
              <Form.Control 
                type="text" 
                placeholder="Ingrese método" 
              />
            </div>

        </Form.Group>


          
      </Form>
    </div>
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
