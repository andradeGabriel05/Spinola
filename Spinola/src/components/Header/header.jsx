import "./header.scss";
import { Link } from "react-router-dom";
import { AiOutlineGlobal } from "react-icons/ai";
import { useEffect, useState } from "react";
import { FaQuinscape } from "react-icons/fa";
import LanguageFile from "../../language.json";
import ChangeLanguage from "../ChangeLanguage/changeLanguage";

export default function Header() {
  const idUser = localStorage.getItem("user");
  const username = localStorage.getItem("username");

  console.log(username);

  function handleLogout() {
    window.location.reload();
    localStorage.removeItem("user");
    localStorage.removeItem("username");
  }

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "en");
  }

  function handleLanguage() {
    localStorage.setItem("language", selectLanguage.value);
    setLanguage(selectLanguage.value);
    window.location.reload();
  }

  function displayUserBox() {
    console.log("ASDSAD");
    const userBox = document.getElementById("userBox");
    userBox.classList.toggle("active");
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
                <a href="/">{LanguageFile.header[language].home}</a>
              </li>
              <li>
                <a href="#bookSection">{LanguageFile.header[language].downloadBooks}</a>
              </li>
              <li>
                <a href="#mediaSection">{LanguageFile.header[language].mediaTitle}</a>
              </li>
              <li>
                <a href="/premiere-lecon">{LanguageFile.homepage[language].collection}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_side">
          <div className="lang">
            <ChangeLanguage />
          </div>
          {idUser ? (
            <div className="user logged" onClick={displayUserBox}>
              <div id="userBox">
                <ul>
                  <li>
                    <Link to="/user">Dashboard</Link>
                  </li>

                  <li>
                    <Link to="/" onClick={handleLogout}>
                      {LanguageFile.header[language].logout}
                    </Link>
                  </li>
                </ul>
              </div>
              <span>{username}</span>
            </div>
          ) : (
            <div className="user">
              <Link to="/login" className="login">
                {LanguageFile.header[language].login}
              </Link>
              <a href="/register" className="register">
                {LanguageFile.header[language].register}
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
