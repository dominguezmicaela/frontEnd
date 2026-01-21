import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Intentando iniciar sesión con:", email, password);
  };
  return (
    <main className="login-container">
      <h1 className="titulo-carrito-estilo">Iniciar Sesión</h1>
      <form className="formulario-login" onSubmit={handleLogin}>
        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="mi-boton">
          Ingresar
        </button>
      </form>
    </main>
  );
}
