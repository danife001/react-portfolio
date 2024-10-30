<<<<<<< HEAD

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Header from "./components/header";
import "./App.css"
import Menu from "./components/menu";
import Habilidades from "./pages/habilidades";
import Proyectos from "./pages/proyectos";
import Contacto from "./pages/contacto";
function AppRoutes(){
    return(
        <BrowserRouter>
        <Header/>
        <Menu/>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/skills" element={<Habilidades />} />
            <Route path="/projects" element={<Proyectos/>} />
            <Route path="/contact" element={<Contacto/>} />
        </Routes>
        </BrowserRouter>
    )
}

=======

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Header from "./components/header";
import "./App.css"
import Menu from "./components/menu";
import Habilidades from "./pages/habilidades";
import Proyectos from "./pages/proyectos";
import Contacto from "./pages/contacto";
function AppRoutes(){
    return(
        <BrowserRouter>
        <Header/>
        <Menu/>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/skills" element={<Habilidades />} />
            <Route path="/projects" element={<Proyectos/>} />
            <Route path="/contact" element={<Contacto/>} />
        </Routes>
        </BrowserRouter>
    )
}

>>>>>>> c0c07ef9e2ca9188decae3f5b5407059fbd2b533
export default AppRoutes