import "../../scss/login.scss";
import { UseLogin } from "./singUp";

const renderLogin = (e) => {
  e.preventDefault();
};

function Logging({ dataEmail, setEmail, dataPassword, setPassword }) {
  return (
    <form className="login" onSubmit={renderLogin}>
      <div className="form-group">
        <input
          type="email"
          placeholder="Correo"
          className="form-control"
          value={dataEmail}
          autoComplete="new-password"
          onChange={(ev) => setEmail(ev.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Contraseña"
          className="form-control"
          value={dataPassword}
          autoComplete="new-password"
          onChange={(ev) => setPassword(ev.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <UseLogin
          dataEmail={dataEmail}
          setEmail={setEmail}
          dataPassword={dataPassword}
          setPassword={setPassword}
          disabled={!dataPassword || !dataEmail}
        />
      </div>
      <div className="form-group-text">
        <span>
          ¿No tienes cuenta?<a href="hello"> Registrate</a>
        </span>
      </div>
    </form>
  );
}

export { renderLogin, Logging };
