import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./index.css";

const Login = () => {

  const { signin } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (event) => {
    event.preventDefault()

    const res = signin(email, senha);

    if (res) {
      alert(res)
      return;
    }

    navigate("/perfil");
  };


  return (
    <div className="altura">
      <fieldset className="formlog">
        <form onSubmit={handleLogin}>
          <h1>Entrar</h1>
          <div className="form-floating">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => [setEmail(e.target.value)]}
                required
              />
              <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Senha"
                required
                value={senha}
                onChange={(e) => [setSenha(e.target.value)]}
              />
              <label for="floatingPassword">Senha</label>
            </div>

            <span style={{ marginTop: "8%" }}>
              <input type="checkbox" style={{ marginRight: "5%" }} required />
              <Link to={"/termosecondicoes"} target="_blank">Aceito termos e condições</Link>
            </span>
            <input
              style={{ color: "white", marginTop: "17px" }}
              type="submit"
              id="submit"
              value="Continuar"
              required
            />
          </div>
        </form>
        <div id="logexterno">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            Faça login com facebook
          </a>
          <br />
          <br />
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
            Faça login com google
          </a>
        </div>
        <br />
        <div>
          <p>Ainda não possúi uma conta?</p>
          <Link to={"/cadastro"}>Cadastre-se</Link>
        </div>
      </fieldset>
    </div>
  );
};

export default Login;
