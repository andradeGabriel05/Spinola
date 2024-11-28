import { useState } from "react";
import "./changeLanguage.scss";

export default function ChangeLanguage() {
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
  return (
    <select
      id="selectLanguage"
      name="selectLanguage"
      onChange={handleLanguage}
      value={language}
    >
      <option value={"en"}>English</option>
      <option value={"pt-BR"}>Português</option>
      <option value={"fr"}>Français</option>
    </select>
  );
}
