import ActivatedButton from "../ActivatedButton/activatedButton";
import LanguageFile from "../../language.json";

export default function navigationLevels() {
  const language = localStorage.getItem("language");

  return (
    <section className="container_homepage_navigation_levels">
      <div className="levels">
        <ActivatedButton link="/">{LanguageFile.homepage[language].navLevel}</ActivatedButton>
      </div>
      <div className="levels">
        <ActivatedButton link="/a2">A2 Élémentaire</ActivatedButton>
      </div>

    </section>
  );
}
