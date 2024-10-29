import axios from "axios";


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
        <form onSubmit={handleRegister}>
            <input type="text" name="username" id="usernameId" placeholder="username" />
            <input type="text" name="password" id="passwordId" placeholder="password" />
            <button type="submit">Submit</button>
        </form>
    )
}

// {
//     "username": "etste",
//         "password": "asdasd"
// }
