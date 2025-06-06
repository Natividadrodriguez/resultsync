import React, { useState } from 'react';
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import PDFResultado from './PDFResultado';
import datosTabsOriginal from './datosTabs';
import datosPacienteOriginal from './datosPaciente';
import datosPersonalizadoOriginal from './datosPersonalizado';
import { storage } from './firebase';
import { ref, uploadBytes } from 'firebase/storage';

const GenerarPDF = () => {
  const [size, setSize] = useState('A4');
  const [subiendo, setSubiendo] = useState(false);
  const [datosTabs, setDatosTabs] = useState(JSON.parse(JSON.stringify(datosTabsOriginal)));
  const [datosPaciente, setDatosPaciente] = useState(JSON.parse(JSON.stringify(datosPacienteOriginal)));
  const [datosPersonalizado, setDatosPersonalizado] = useState(JSON.parse(JSON.stringify(datosPersonalizadoOriginal)));

  const getProtocolo = () => {
    const campoProtocolo = datosPaciente.campos.find(c => c.nombre.toLowerCase().includes('protocolo'));
    return campoProtocolo?.valor?.trim() || 'resultado';
  };

  const handlePacienteChange = (index, valor) => {
    const nuevos = [...datosPaciente.campos];
    nuevos[index].valor = valor;
    setDatosPaciente({ ...datosPaciente, campos: nuevos });
  };

  const handlePersonalizadoChange = (grupoIndex, campoId, valor) => {
    const nuevos = [...datosPersonalizado.campos];
    const campo = nuevos[grupoIndex].campos.find(c => c.id === campoId);
    if (campo) campo.valor = valor;
    setDatosPersonalizado({ ...datosPersonalizado, campos: nuevos });
  };

  const handleDatosTabsChange = (seccionKey, subKey, index, valor) => {
    const copia = JSON.parse(JSON.stringify(datosTabs));
    const target = subKey
      ? copia[seccionKey].subsecciones[subKey].determinaciones[index]
      : copia[seccionKey].determinaciones[index];
    target.valor = valor;
    setDatosTabs(copia);
  };

  // 🔼 Función para subir PDF a Firebase
  const subirPDFaFirebase = async () => {
    setSubiendo(true);
    const protocolo = getProtocolo();
    const doc = (
      <PDFResultado
        datosTabs={datosTabs}
        datosPaciente={datosPaciente}
        datosPersonalizado={datosPersonalizado}
        size={size}
      />
    );

    const blob = await pdf(doc).toBlob();
    const pdfRef = ref(storage, `pdfs/${protocolo}.pdf`);

    try {
      await uploadBytes(pdfRef, blob);
      alert('PDF subido exitosamente a Firebase');
    } catch (error) {
      console.error('Error al subir PDF:', error);
      alert('Error al subir el PDF');
    } finally {
      setSubiendo(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Generar PDF</h2>

      {/* Selección de tamaño */}
      <label>
        Tamaño:
        <select value={size} onChange={e => setSize(e.target.value)} style={{ marginLeft: 10 }}>
          <option value="A4">A4</option>
          <option value="A5">A5</option>
        </select>
      </label>

      <hr />

      {/* DATOS DEL PACIENTE */}
      <h3>{datosPaciente.titulo}</h3>
      {datosPaciente.campos.map((campo, i) => (
        <div key={i}>
          <label>{campo.nombre}: </label>
          <input
            type={campo.tipo}
            placeholder={campo.placeholder}
            value={campo.valor}
            onChange={e => handlePacienteChange(i, e.target.value)}
          />
        </div>
      ))}

      <hr />

      {/* DATOS PERSONALIZADOS */}
      <h3>{datosPersonalizado.titulo}</h3>
      {datosPersonalizado.campos.map((grupo, i) => (
        <div key={i} style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
          <h4>{grupo.nombre}</h4>
          {grupo.campos.map(campo => (
            <div key={campo.id}>
              <label>{campo.placeholder}: </label>
              <input
                type="text"
                placeholder={campo.placeholder}
                value={campo.valor}
                onChange={e => handlePersonalizadoChange(i, campo.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      ))}

      <hr />

      {/* DATOS DE ANALISIS */}
      <h3>Secciones de Análisis</h3>
      {Object.entries(datosTabs).map(([key, seccion]) => (
        <div key={key} style={{ border: '1px solid #aaa', padding: 10, marginBottom: 20 }}>
          <h4>{seccion.titulo}</h4>
          {seccion.subsecciones
            ? Object.entries(seccion.subsecciones).map(([subKey, sub]) => (
                <div key={subKey} style={{ marginLeft: 20 }}>
                  <h5>{sub.titulo}</h5>
                  {sub.determinaciones.map((det, idx) => (
                    <div key={idx}>
                      <label>{det.nombre}: </label>
                      <input
                        type="text"
                        value={det.valor}
                        onChange={e =>
                          handleDatosTabsChange(key, subKey, idx, e.target.value)
                        }
                      />
                    </div>
                  ))}
                </div>
              ))
            : seccion.determinaciones.map((det, idx) => (
                <div key={idx}>
                  <label>{det.nombre}: </label>
                  <input
                    type="text"
                    value={det.valor}
                    onChange={e => handleDatosTabsChange(key, null, idx, e.target.value)}
                  />
                </div>
              ))}
        </div>
      ))}

      {/* BOTÓN DE DESCARGA + SUBIDA */}
      <div style={{ marginTop: 20 }}>
        <PDFDownloadLink
          document={
            <PDFResultado
              datosTabs={datosTabs}
              datosPaciente={datosPaciente}
              datosPersonalizado={datosPersonalizado}
              size={size}
            />
          }
          fileName={`${getProtocolo()}.pdf`}
          style={{
            marginRight: 10,
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
          }}
        >
          {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
        </PDFDownloadLink>

        <button
          onClick={subirPDFaFirebase}
          disabled={subiendo}
          style={{
            padding: '10px 20px',
            backgroundColor: subiendo ? '#ccc' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          {subiendo ? 'Subiendo...' : 'Subir a Firebase'}
        </button>
      </div>
    </div>
  );
};

export default GenerarPDF;