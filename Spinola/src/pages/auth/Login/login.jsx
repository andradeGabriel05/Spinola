import axios from "axios";
import { Link } from "react-router-dom";
import "../auth.scss";

export default function Login() {
  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3300/login-user`, {
        email: emailId.value,
        password: passwordId.value,
      });

      localStorage.setItem("user", response.data[0].id_user);
      localStorage.setItem("username", response.data[0].username);
      window.location.href = "/";
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="container_register">
      <div className="wrapper_register">
        <div className="elements_register">
          <Link to={"/"}>
            <h1>Spínola</h1>
          </Link>
          <div className="register_form">
            <h2 style={{ color: "#000" }}>Se connecter</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                name="email"
                id="emailId"
                placeholder="Email"
              />

              <input
                type="text"
                name="password"
                id="passwordId"
                placeholder="Password"
              />
              <button type="submit">Se connecter</button>
            </form>

            <div className="already_have_login">
              <Link to={"/register"}>Créer nouveau compte</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// {
//     "username": "etste",
//         "password": "asdasd"
// }
