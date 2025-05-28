const datosTabs = {
  hemograma: {
    titulo: "Hemograma",
    subsecciones: {
      hemogramaBasico: {
        titulo: "Hemograma",
        determinaciones: [
          {
            nombre: "Eritrocitos",
            valor: "",
            valoresNormales: [
              "Hombres: 4.500.000-5.900.000",
              "Mujeres: 4.000.000-5.200.000"
            ],
          },
          {
            nombre: "Hematocrito",
            valor: "",
            valoresNormales: [
              "Hombres: 40-52 %",
              "Mujeres: 36-45 %"
            ],
          },
          {
            nombre: "Hemoglobina",
            valor: "",
            valoresNormales: [
              "Hombres: 13-18 g/dl",
              "Mujeres: 12-15 g/dl"
            ],
          },
          {
            nombre: "Leucocitos",
            valor: "",
            valoresNormales: ["4.000-10.000/µL"],
          },
        ],
      },
      indicesHematimetricos: {
        titulo: "Índices Hematimétricos",
        determinaciones: [
          {
            nombre: "VCM",
            valor: "",
            valoresNormales: ["80-100 fl"],
          },
          {
            nombre: "HCM",
            valor: "",
            valoresNormales: ["27,5-33,2 pg"],
          },
          {
            nombre: "CHCM",
            valor: "",
            valoresNormales: ["32-36 %"],
          },
        ],
      },
      formulaLeucocitaria: {
        titulo: "Fórmula Leucocitaria",
        determinaciones: [
          { nombre: "Cayados", valor: "", valoresNormales: ["0-1 %"] },
          { nombre: "Neutrófilos", valor: "", valoresNormales: ["50-65%"] },
          { nombre: "Eosinófilos", valor: "", valoresNormales: ["0-4 %"] },
          { nombre: "Basófilos", valor: "", valoresNormales: ["0-1 %"] },
          { nombre: "Linfocitos", valor: "", valoresNormales: ["30-45 %"] },
          { nombre: "Monocitos", valor: "", valoresNormales: ["2-8%"] },
        ],
      },
    },
  },

  perfilGlucemico: {
    titulo: "Perfil Glucémico",
    determinaciones: [
      {
        nombre: "Glucemia",
        valor: "",
        valoresNormales: ["70-110 mg/dl"],
      },
      {
        nombre: "Insulina",
        valor: "",
        valoresNormales: ["5-15 mUI/mL"],
      },
      {
        nombre: "Índice HOMA",
        valor: "",
        valoresNormales: [
          "Normal: <2,5",
          "Riesgo intermedio: 1,5-2,4",
          "Resistencia a la Insulina: >2,7",
        ],
      },
      {
        nombre: "Hemoglobina Glicosilada",
        metodo: "Método: Inmunoturbidimétrico",
        valor: "",
        valoresNormales: ["4.8 a 5.9% de Hb total"],
      },
    ],
  },

   perfilRenal: {
    titulo: "Perfil Renal",
    subsecciones: {
      perfilRenalBasico: {
        titulo: "Perfil Renal",
        determinaciones: [
          {
            nombre: "Urea",
            valor: "",
            valoresNormales: ["15-45 mg/dl"],
          },
          {
            nombre: "Creatinina",
            valor: "",
            valoresNormales: [
              "Hombres: 0,7-1,3 mg/dl",
              "Mujeres: 0,6- 1,1 mg/dl",
            ],
          },
          {
            nombre: "Uricemia",
            valor: "",
            valoresNormales: ["3.40-7.00 mg/dl"],
          },
        ],
      },
      ionograma: {
        titulo: "Ionograma",
        determinaciones: [
          {
            nombre: "Sodio",
            valor: "",
            valoresNormales: ["135-145 mEq/L"],
          },
          {
            nombre: "Potasio",
            valor: "",
            valoresNormales: ["3,4-4,5 mEq/L"],
          },
          {
            nombre: "Cloro",
            valor: "",
            valoresNormales: ["95-105 mEq/L"],
          },
        ],
      },
    },
  },

  perfilHepatico: {
  titulo: "Perfil Hepatico",
  determinaciones: [
    {
      nombre: "G.O.T.",
      metodo: "Metodo: Cinetico",
      valor: "",
      valoresNormales: ["Hasta 39 UI/L"],
    },
    {
      nombre: "G.P.T.",
      metodo: "Metodo: Cinetico",
      valor: "",
      valoresNormales: ["Hasta 49 UI/L"],
    },
    {
      nombre: "G.G.T.",
      metodo: "Metodo: Cinetico",
      valor: "",
      valoresNormales: ["Hasta 41 UI/L"],
    },
    {
      nombre: "Fostasa Alcalina",
      metodo: "Metodo: Cinetico",
      valor: "",
      valoresNormales: ["40-190 UI/L"],
    },
    {
      nombre: "Bilirrubina Total",
      metodo: "Metodo: DPD",
      valor: "",
      valoresNormales: ["Hasta 1.0 mg/dl"],
    },
    {
      nombre: "Bilirrubina Indirecta",
      metodo: "Metodo: DPD",
      valor: "",
      valoresNormales: ["Hasta 0.20 mg/dl"],
    },
    {
      nombre: "Bilirrubina Directa",
      metodo: "Metodo: DPD",
      valor: "",
      valoresNormales: ["95-105 mEq/L"],
    },
    {
      nombre: "Uricemia",
      metodo: "Metodo: Enzimatico",
      valor: "",
      valoresNormales: ["3.40-7.00 mg/dl"],
    },
  ],
},

perfilLipidico: {
  titulo: "Perfil Lipidico",
  determinaciones: [
    {
      nombre: "Colesterol Total",
      metodo: "Metodo: Enzimatico",
      valor: "",
      valoresNormales: ["Menor a 200 mg/dl"],
    },
    {
      nombre: "Colesterol HDL",
      metodo: "Metodo: Enzimatico",
      valor: "",
      valoresNormales: ["Mayor a 40 mg/dl"],
    },
    {
      nombre: "Colesterol LDL",
      metodo: "Metodo: Enzimatico",
      valor: "",
      valoresNormales: ["Menor a 130 mg/dl"],
    },
    {
      nombre: "Trigliceridos",
      metodo: "Metodo: Enzimatico",
      valor: "",
      valoresNormales: ["Menor a 150 mg/dl"],
    },
  ],
},

orina: {
  titulo: "Orina Completa",
  subsecciones: {
    examenFisicoQuimico: {
      titulo: "Examen Fisico-quimico",
      determinaciones: [
        { nombre: "Color", valor: "" },
        { nombre: "Aspecto", valor: "" },
        { nombre: "PH", valor: "" },
        { nombre: "Densidad", valor: "" },
      ],
    },
    examenCitologico: {
      titulo: "Examen Citologico",
      determinaciones: [
        { nombre: "Celulas", valor: "" },
        { nombre: "Leucocitos", valor: "" },
        { nombre: "Hematies", valor: "" },
        { nombre: "Mucus", valor: "" },
      ],
    },
    observaciones: {
      titulo: "Observaciones",
      determinaciones: [
        { nombre: "Observaciones", valor: "" },
      ],
    },
  },
},

coagulacion: {
  titulo: "Coagulación",
  determinaciones: [
    {
      nombre: "TP",
      metodo: "?", 
      valoresNormales: ["12,3-15,1 segundos"],
    },
    {
      nombre: "% de Actividad",
      metodo: "?",
      valor: "",
      valoresNormales: [">70%"],
    },
    {
      nombre: "KPTT",
      metodo: "?",
      valor: "",
      valoresNormales: ["28,0 a 42,0 segundos"],
    },
    {
      nombre: "RIN",
      metodo: "?",
      valor: "",
      valoresNormales: ["0,9 a 1,1"],
    },
  ],
},

perfilMineral: {
  titulo: "Perfil Mineral",
  determinaciones: [
    {
      nombre: "Calcio Total",
      metodo: "?",
      valor: "",
      valoresNormales: ["8.5-10.2 mg/dL"],
    },
    {
      nombre: "Calcio Ionico",
      metodo: "?",
      valor: "",
      valoresNormales: ["4.8-5.6 mg/dL"],
    },
    {
      nombre: "Fosforo",
      metodo: "?",
      valor: "",
      valoresNormales: [
        "Adultos: 2.8 a 4.5 mg/dL",
        "Niños: 4.0 a 7.0 mg/dL"
      ],
    },
    {
      nombre: "Magnesio",
      metodo: "?",
      valor: "",
      valoresNormales: ["1.7-2.2 mg/dL"],
    },
  ],
},

personalizado: {
  titulo: "Personalizado",
  determinaciones: [
    {
      nombre: "",
      metodo: "",
      valor: "",
      valoresNormales: [""],
    },
    {
      nombre: "",
      metodo: "",
      valor: "",
      valoresNormales: [""],
    },
    {
      nombre: "",
      metodo: "",
      valor: "",
      valoresNormales: [""],
    },
  ],
},







};




export default datosTabs;