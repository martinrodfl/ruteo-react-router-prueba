import { useState } from "react";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulamos un login exitoso
    if (username && password) {
      navigate("/dashboard"); // Redirigir al dashboard
    } else {
      alert("Por favor, ingresa tus credenciales.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
