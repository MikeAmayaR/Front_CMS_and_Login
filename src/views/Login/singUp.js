import { useEffect, useState } from "react";
import { login } from "../../functions/functions";

function UseLogin({dataEmail, dataPassword}) {
  const [singUp, setSignUp] = useState("exists");
  const [role, setRol] = useState(false);
  const [options, setOptions] = useState("0");

  useEffect(() => {
    async function loadLogin() {
      if (dataEmail && dataPassword) {
        const response = await login(dataEmail);
        console.log("response", response.data.data);
        if (response.data.data.length > 1) {
          setRol(true);
        } else {
          console.log("nelson");
        }
        return response;
      }
    }
    loadLogin();
  }, [singUp]);

  const submitButton = (e) => {
    setSignUp();
    setOptions({ options: e });
    if (singUp) {
      console.log("entra");
    } else {
      console.log("noe entra");
    }
  };

  return (
    <div>
      {role ? (
        <div className="form-group">
          <select
            id="select"
            name="select"
            defaultValue={options}
            className="form-control-select"
            onChange={(e) => submitButton(e.target.value)}
          >
            <option value="0">Lector</option>
            <option value="1">Editor</option>
            <option value="2">Administrador</option>
          </select>
        </div>
      ) : (
        ""
      )}
      <button type="submit" onClick={submitButton} className="login__submit ">
        <span className="button__text">Ingresa</span>
      </button>
    </div>
  );
}

export { UseLogin };
