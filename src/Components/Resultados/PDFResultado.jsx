import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import membrete from '../../img/membreteLAB.jpeg';
import firma from '../../assets/images/firmaJuan.jpeg';

const styles = StyleSheet.create({
  page: { padding: 20, fontFamily: 'Helvetica' },
  header: { marginBottom: 20, height: 80 },
  membreteImage: { width: '100%', height: '100%', objectFit: 'contain' },
  footer: { position: 'absolute', bottom: 20, right: 20, width: 120, height: 60 },
  firmaImage: { width: '100%', height: '100%', objectFit: 'contain' },
  section: { marginBottom: 15 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  subsectionTitle: { fontSize: 14, fontWeight: 'bold', marginTop: 10, marginBottom: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  column: { width: '30%' },
  smallText: { fontSize: 10 },
  valoresNormalesText: { fontSize: 10, fontStyle: 'italic' },
  campoPaciente: { marginBottom: 3 },
});

const PDFResultado = ({ datosTabs, datosPaciente, datosPersonalizado, size = 'A4' }) => {
  // Filtra y renderiza subsecciones, mostrando solo determinaciones con valor
  const renderSubsecciones = (subsecciones) => {
    return Object.entries(subsecciones).map(([key, subseccion]) => {
      // Filtramos determinaciones que tienen valor no vacío
      const determinacionesConValor = subseccion.determinaciones.filter(det => det.valor?.trim() !== '');
      if (determinacionesConValor.length === 0) return null; // Si ninguna, no mostramos esta subseccion

      return (
        <View key={key} style={styles.section}>
          <Text style={styles.subsectionTitle}>{subseccion.titulo}</Text>
          {determinacionesConValor.map((det, i) => (
            <View style={styles.row} key={i}>
              <View style={styles.column}>
                <Text>{det.nombre}</Text>
                <Text>{det.valor}</Text>
                {det.metodo && <Text style={styles.smallText}>Método: {det.metodo}</Text>}
              </View>
              <View style={styles.column}>
                {det.valoresNormales?.map((val, j) => (
                  <Text key={j} style={styles.valoresNormalesText}>{val}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      );
    });
  };

  // Render paciente, solo campos con valor
  const renderDatosPaciente = () => {
    const camposConValor = datosPaciente.campos.filter(campo => campo.valor?.trim() !== '');
    if (camposConValor.length === 0) return null;

    return (
      <View style={styles.section}>
        <Text style={styles.title}>{datosPaciente.titulo}</Text>
        {camposConValor.map((campo, i) => (
          <View key={i} style={styles.campoPaciente}>
            <Text><Text style={{ fontWeight: 'bold' }}>{campo.nombre}:</Text> {campo.valor}</Text>
          </View>
        ))}
      </View>
    );
  };

  // Render personalizado: filtra determinaciones que tengan campo nombre y valor no vacíos
  const renderPersonalizado = () => {
    // Cada item es un grupo con varios campos
    // Buscamos solo los que tengan nombre y valor con contenido
    const determinacionesFiltradas = datosPersonalizado.campos.filter(determ => {
      // buscar campo nombre y valor
      const nombre = determ.campos.find(c => c.id?.includes('nombre'))?.valor?.trim();
      const valor = determ.campos.find(c => c.id?.includes('valor'))?.valor?.trim();
      return nombre && valor;
    });

    if (determinacionesFiltradas.length === 0) return null;

    return (
      <View style={styles.section}>
        <Text style={styles.title}>{datosPersonalizado.titulo}</Text>
        {determinacionesFiltradas.map((determ, i) => {
          const nombre = determ.campos.find(c => c.id?.includes('nombre'))?.valor;
          const valor = determ.campos.find(c => c.id?.includes('valor'))?.valor;
          const metodo = determ.campos.find(c => c.id?.includes('metodo'))?.valor;
          const normales = determ.campos.find(c => c.id?.includes('normales'))?.valor;

          return (
            <View style={styles.row} key={i}>
              <View style={styles.column}>
                <Text>{nombre}</Text>
                <Text>{valor}</Text>
                {metodo && <Text style={styles.smallText}>Método: {metodo}</Text>}
              </View>
              <View style={styles.column}>
                {normales && <Text style={styles.valoresNormalesText}>{normales}</Text>}
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <Document>
      <Page size={size} style={styles.page}>

        {/* Membrete */}
        <View style={styles.header}>
          <Image src={membrete} style={styles.membreteImage} />
        </View>

        {/* Datos Paciente */}
        {renderDatosPaciente()}

        {/* Iterar secciones de datosTabs */}
        {Object.entries(datosTabs).map(([key, seccion]) => {
          // Filtramos determinaciones con valor
          if (seccion.subsecciones) {
            // Filtrar subsecciones que tengan determinaciones con valor
            const subseccionesFiltradas = Object.fromEntries(
              Object.entries(seccion.subsecciones).filter(([k, subsec]) =>
                subsec.determinaciones.some(det => det.valor?.trim() !== '')
              )
            );
            if (Object.keys(subseccionesFiltradas).length === 0) return null;

            return (
              <View style={styles.section} key={key}>
                <Text style={styles.title}>{seccion.titulo}</Text>
                {renderSubsecciones(subseccionesFiltradas)}
              </View>
            );
          } else {
            // sección sin subsecciones
            const determinacionesConValor = seccion.determinaciones.filter(det => det.valor?.trim() !== '');
            if (determinacionesConValor.length === 0) return null;

            return (
              <View style={styles.section} key={key}>
                <Text style={styles.title}>{seccion.titulo}</Text>
                {determinacionesConValor.map((det, i) => (
                  <View style={styles.row} key={i}>
                    <View style={styles.column}>
                      <Text>{det.nombre}</Text>
                      <Text>{det.valor}</Text>
                      {det.metodo && <Text style={styles.smallText}>Método: {det.metodo}</Text>}
                    </View>
                    <View style={styles.column}>
                      {det.valoresNormales?.map((val, j) => (
                        <Text key={j} style={styles.valoresNormalesText}>{val}</Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            );
          }
        })}

        {/* Personalizado */}
        {renderPersonalizado()}

        {/* Firma */}
        <View style={styles.footer}>
          <Image src={firma} style={styles.firmaImage} />
        </View>
      </Page>
    </Document>
  );
};

export default PDFResultado;