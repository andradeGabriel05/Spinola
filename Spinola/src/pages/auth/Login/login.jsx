import axios from "axios";
import { Link } from "react-router-dom";
import "../auth.scss";

export default function Login() {
  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3300/api/login-user`,
        {
          email: emailId.value,
          password: passwordId.value,
        }
      );

      localStorage.setItem("user", response.data.id_user);
      localStorage.setItem("username", response.data.username);
      window.location.href = "/";
    } catch (error) {
      console.error("Error:", error);

      if (emailId.value == "" && passwordId.value == "") {
        emailId.style.border = "1px solid red";
        passwordId.style.border = "1px solid red";

        document.getElementById("textEmailField").innerHTML =
          "Email and password is required";
      } else if (emailId.value == "") {
        emailId.style.border = "1px solid red";
        document.getElementById("textEmailField").innerHTML =
          "Email is required";
      } else if (passwordId.value == "") {
        passwordId.style.border = "1px solid red";
        document.getElementById("textPasswordField").innerHTML =
          "Password is required";
      } else if (error.response.status === 403) {
        document.getElementById("textEmailField").innerHTML =
          "Email ou mot de passe incorrect";
        passwordId.style.border = "1px solid red";
        emailId.style.border = "1px solid red";
      }

      document.addEventListener("keyup", () => {
        emailId.style.border = "1px solid #dadada";
        passwordId.style.border = "1px solid #dadada";
        document.getElementById("textEmailField").innerHTML = "";
        document.getElementById("textPasswordField").innerHTML = "";
      });
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
              <p
                id="textEmailField"
                data-validation="emailField"
                style={{ color: "#000" }}
              ></p>
              <input
                type="text"
                name="email"
                id="emailId"
                placeholder="Email"
              />

              <p
                id="textPasswordField"
                data-validation="passwordField"
                style={{ color: "#000" }}
              ></p>
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
