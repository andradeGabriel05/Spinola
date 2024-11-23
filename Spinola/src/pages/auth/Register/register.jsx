import axios from "axios";
import { Link } from "react-router-dom";
import "../auth.scss";

export default function Register() {
  function handleRegister(event) {
    event.preventDefault();

    const response = axios
      .post(`http://localhost:3300/api/register-user`, {
        username: usernameId.value,
        email: emailId.value,
        password: passwordId.value,
      })
      .then((response) => {
        console.log("User created:", response.data);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="container_register">
      <div className="wrapper_register">
        <div className="elements_register">
          <Link to={"/"}>
            <h1>Spínola</h1>
          </Link>
          <div className="register_form">
            <h2 style={{color: "#000"}}>Créer un compte</h2>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                name="email"
                id="emailId"
                placeholder="Email"
              />
              <input
                type="text"
                name="username"
                id="usernameId"
                placeholder="Username"
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
              <Link to={"/login"}>Vous avez déjà un compte ?</Link>
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
