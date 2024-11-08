import "./header.scss";
import { Link } from "react-router-dom";
import { AiOutlineGlobal } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Header() {
  const idUser = localStorage.getItem("user");
  const username = localStorage.getItem("username");
  console.log(username);

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("username");
  //   window.location.reload();
  // };

  const [language, setLanguage] = useState("english");
  // const select_language = document.getElementById("select_language");
  
  useEffect(() => {
    setLanguage(localStorage.getItem("language"));
    console.log(language)
    // setLanguage(select_language.value)
  }, [language])

  function handleLanguage() {
    localStorage.setItem("language", selectLanguage.value);
    console.log(language)
    
  }

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
          <div className="lang">
            <select id="selectLanguage" name="selectLanguage" onChange={handleLanguage}>
              <option value={"english"}>English</option>
              <option value={"portuguese"}>Português</option>
              <option value={"french"}>Français</option>
            </select>
          </div>
          {idUser ? (
            <div className="user">
              <Link to="/user" className="register">
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
