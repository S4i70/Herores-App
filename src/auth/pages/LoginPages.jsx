import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPages = () => {
  const { login } = useContext(AuthContext);
  const navi = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("saitama");

    navi(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>LoginPages</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
