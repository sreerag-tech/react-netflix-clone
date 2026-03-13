import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => login("user@test.com")}>
        Login
      </button>
    </div>
  );
}

export default Login;