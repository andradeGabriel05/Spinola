import axios from "axios";
import { Link } from "react-router-dom";
import "../auth.scss";

import LanguageFile from "../../../language.json";

export default function Register() {
  const language = localStorage.getItem("language");
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
        if (error.response.status === 500) {
          console.log("ASDASD");
          document.getElementById("textEmailField").innerHTML = "Email already exists";
          emailId.style.border = "1px solid red";
        }
      });

    if (emailId.value == "" && passwordId.value == "" && usernameId.value == "") {
      emailId.style.border = "1px solid red";
      passwordId.style.border = "1px solid red";
      usernameId.style.border = "1px solid red";

      document.getElementById("textEmailField").innerHTML =
        "Email, password and username is required";
    } else if (emailId.value == "") {
      emailId.style.border = "1px solid red";
      document.getElementById("textEmailField").innerHTML = "Email is required";
    } else if (usernameId.value == "") {
      usernameId.style.border = "1px solid red";
      document.getElementById("textUsernameField").innerHTML =
        "Username is required";
    } else if (passwordId.value == "") {
      passwordId.style.border = "1px solid red";
      document.getElementById("textPasswordField").innerHTML =
        "Password is required";
    } 



    document.addEventListener("keyup", () => {
      emailId.style.border = "1px solid #dadada";
      passwordId.style.border = "1px solid #dadada";
      usernameId.style.border = "1px solid #dadada";
      document.getElementById("textEmailField").innerHTML = "";
      document.getElementById("textPasswordField").innerHTML = "";
      document.getElementById("textUsernameField").innerHTML = "";
    })

  }



  return (
    <div className="container_register">
      <div className="wrapper_register">
        <div className="elements_register">
          <Link to={"/"}>
            <h1>Spínola</h1>
          </Link>
          <div className="register_form">
            <h2 style={{color: "#000"}}>{LanguageFile.register[language].title}</h2>
            <form onSubmit={handleRegister}>
              <p id="textEmailField"></p>
              <input
                type="text"
                name="email"
                id="emailId"
                placeholder="Email"
              />

              <p id="textUsernameField"></p>
              <input
                type="text"
                name="username"
                id="usernameId"
                placeholder="Username"
              />

              <p id="textPasswordField"></p>
              <input
                type="text"
                name="password"
                id="passwordId"
                placeholder={LanguageFile.register[language].password}
              />
              <button type="submit">{LanguageFile.register[language].button}</button>
            </form>

            <div className="already_have_login">
              <Link to={"/login"}>{LanguageFile.register[language].login}</Link>
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
