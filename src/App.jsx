import "bootstrap/dist/css/bootstrap.min.css";
import react from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useState} from 'react';
import HomePage from "./Components/HomePage/HomePage"
import CargaResultados from "./Components/CargaResultados/CargaResultados"
import './App.css'
import NavBar from "./Components/NavBar/NavBar";
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="cargaresultados" element={<CargaResultados/>}/>
      </Routes>

    </Router>
  )
}

export default App
