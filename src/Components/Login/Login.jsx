import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
    alert("Enviando os dados..." + username + "-" + password);
  };

  return (
    <div className="container">
      <form onSubmit={handlesubmit}>
        <h1>Faça o Login</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembrar senha
          </label>
          <a href="#">Esqueci a senha</a>
        </div>
        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Ainda não tem conta? <a href="#">Cadastre-se</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
