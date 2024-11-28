import { Link } from "react-router-dom";
import LanguageFile from "../../language.json";

export default function BookSection() {
  const language = localStorage.getItem("language");
  return (
    <section className="books_section" id="bookSection">
      <div className="books_container">
        <div className="content">
          <div className="usilles-text">
            <h1>{LanguageFile.homepage[language].marketingTitle}</h1>

            <div className="division_border_div">
              <div className="division_border"></div>
            </div>
          </div>
          <div className="wrapper-content">
            <div className="text">
            <h1>{LanguageFile.homepage[language].downloadBooks}</h1>

              <p>
                {LanguageFile.homepage[language].downloadBooksDescription}
              </p>
              <Link to="/download-books">
                <button>{LanguageFile.homepage[language].downloadBooksButton}</button>
              </Link>
            </div>
            <div className="image"></div>
          </div>
        </div>
      </div>
      <div className="division_border_div">
        <div className="division_border"></div>
      </div>
    </section>
  );
}
