import { useState } from "react";
import { useNavigate } from "react-router";
import "./LoginPage.css";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulamos un login
    if (username && password) {
      localStorage.setItem("authToken", "userLoggedIn");
      navigate("/dashboard");
    } else {
      alert("Por favor, ingresa tus credenciales.");
    }
  };

  return (
    <div className="login-page">
      <h1 className="text-3xl font-bold underline">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          Submit
        </button>
      </form>
    </div>
  );
};
