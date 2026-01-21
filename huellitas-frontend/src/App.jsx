import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import { Contacto } from "./pages/Contact/Contacto";
import { Inicio } from "./pages/Home/Inicio";
import { Login } from "./pages/Login/Login";
import AdminPanel from "./pages/Admin/AdminPanel";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className={`app-container ${isAdminRoute ? 'admin-route' : ''}`}>
      <header>
        <div className="div-log">
          <Link to="/">
           <img
              src="img/LOGO.jpg"
              className="logo-circular"
              alt="Logo de Huellitas"
              width="120"
            />
          </Link>
        </div>

        <nav className="menu-navegacion">
         <Link to="/" className="mi-boton">
            <img 
              src="img/INICIO.png"
              className="icono-img" 
              alt="Inicio" 
            />
            Inicio
          </Link>

          <Link to="/contacto" className="mi-boton">
            <img src="img/CONTACTO.png" className="icono-img" alt="Contacto" />
            Contacto
          </Link>

          <Link to="/carrito" className="mi-boton">
            <img src="img/CARRITO.png" className="icono-img" alt="Carrito" />
            Carrito
          </Link>

          <Link to="/login" className="mi-boton">
            👤 Iniciar Sesión
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<div>Página de Carrito</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel/>}/>
      </Routes>

      <footer className="pie-pagina">
        <p className="autor">Sitio realizado por Micaela</p>
        <nav className="redes-sociales">
          <span style={{ marginRight: "10px" }}>Instagram</span>
          <span style={{ marginRight: "10px" }}>Facebook</span>
          <span>WhatsApp</span>
        </nav>
      </footer>
    </div>
  );
}

export default App;
