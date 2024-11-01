import axios from "axios";
import { Link } from "react-router-dom";
import "../Register/register.scss"

export default function Register() {
    function handleRegister(event) {
        event.preventDefault();

        const response = axios
            .post(`http://localhost:3300/register-user`, {
                username: usernameId.value,
                password: passwordId.value
            })
            .then((response) => {
                console.log("User created:", response.data);
                window.location.href = "/";
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <div className="container_register">
            <Link to={"/"}><h1>Spínola</h1></Link>
            <div className="register_form">
                <form onSubmit={handleRegister}>
                    <input type="text" name="email" id="emailId" placeholder="Email" />
                    <input type="text" name="username" id="usernameId" placeholder="Username" />
                    <input type="text" name="password" id="passwordId" placeholder="Password" />
                    <button type="submit">Submit</button>
                </form>

                <div className="already_have_login">
                    <Link to={"/login"}>Vous avez un account?</Link>
                </div>
            </div>
        </div>
    )
}

// {
//     "username": "etste",
//         "password": "asdasd"
// }
