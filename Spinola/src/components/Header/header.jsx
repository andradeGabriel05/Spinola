import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  const idUser = localStorage.getItem("user");
  const username = localStorage.getItem("username");
  console.log(username);
  return (
    <header>
      <div className="container_header">
        <div className="left_side">
          <div className="logo">
            <Link to="/">
              <h1>Spínola</h1>
            </Link>
          </div>
          <div className="header_links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_side">
          {idUser ? (
            <div className="user">
              <Link to="/login" className="register">
                {username}
              </Link>
            </div>
          ) : (
            <div className="user">
              <Link to="/login" className="login">
                Login
              </Link>
              <a href="/register" className="register">
                Register
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

{
  /* 
        <div className="user_profile">
          <img src="https://via.placeholder.com/50" alt="Profile" />
          <span>John Doe</span>
        </div> */
}
