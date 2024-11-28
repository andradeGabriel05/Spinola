import "./homepage.scss";
import { Link } from "react-router-dom";
import ActivatedButton from "../../components/ActivatedButton/activatedButton";
import NavigationLevels from "../../components/NavigationLevels/navigationLevels";
import BookSection from "../../components/BookSection/bookSection";
import LanguageFile from "../../language.json";

export default function homepage() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_homepage">
      <NavigationLevels />

      <section className="homepage_main">
        <div className="homepage_main_content">
          <div className="left_side">
            <Link to="/premiere-lecon" className="wrapper-message-user-home">
              <div className="card1">
                <div className="image_card"></div>
                <div className="text">
                  <p>{LanguageFile.homepage[language].collectionTitleBigger}</p>
                  <h2>{LanguageFile.homepage[language].collection}</h2>
                </div>
              </div>
            </Link>
          </div>
          <div className="right_side">
            <Link
              to="/learning/exercices/first-lessons/1/1_1/exercice1"
              className="first_exercice_link"
            >
              <div className="card2">
                <div className="image_card"></div>
                <div className="text">
                  <p>Bonjour!</p>
                  <h2>{LanguageFile.homepage[language].collectionSmallUp}</h2>
                </div>
              </div>
            </Link>

            <div className="card3">
              <h2>Titre de la carte 3</h2>
              <p>Description de la carte 3</p>
            </div>
          </div>
        </div>
      </section>

      <BookSection />

      <section className="media_section">
        <div className="media_container">
          <div className="content">
            <div className="text">
              <h1>{LanguageFile.homepage[language].mediaTitle}</h1>
            </div>
            <div className="media_flex">
              <h3>{LanguageFile.homepage[language].mediaVideo}</h3>
              <div className="content_wrapper">
                <Link to={"media-learning/comment-allez-vous"} className="box1">
                  <div className="media_box video_box1">
                    <div className="video_text">
                      <p>
                        Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                      </p>
                      <h4>Coffee Break Languages</h4>
                    </div>
                  </div>
                </Link>
                <Link to={"media-learning/les-enfants"} className="box2">
                  <div className="media_box video_box2">
                    <div className="video_text">
                      <p>Je me présente</p>
                      <h4>Les enfants parlent français </h4>
                    </div>
                  </div>
                </Link>

                <Link to={"media-learning/french-comprehensible"} className="box3">
                  <div className="media_box video_box3">
                    <div className="video_text">
                      <p>
                        Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                      </p>
                      <h4>Coffee Break Languages</h4>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="media_flex">
              <h3>{LanguageFile.homepage[language].mediaMusic}</h3>
              <div className="content_wrapper">
                <Link to={"media-learning/message-personnel"} className="box1">
                  <div className="media_box musique_box1">
                    <div className="video_text">
                      <p>Message Personnel</p>
                      <h4>Françoise Hardy</h4>
                    </div>
                  </div>
                </Link>

                <Link
                  to={"media-learning/le-ciel-le-soleil-la-mer"}
                  className="box2"
                >
                  <div className="media_box musique_box2">
                    <div className="video_text">
                      <p>Le Ciel Le Soleil Et La Mer</p>
                      <h4>François Deguelt</h4>
                    </div>
                  </div>
                </Link>

                <Link to={"media-learning/en-chantant"} className="box3">
                  <div className="media_box musique_box3">
                    <div className="video_text">
                      <p>En chantant</p>
                      <h4>Michel Sardou</h4>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="media_flex">
              <h3>Podcasts</h3>
              <div className="content_wrapper">
                <Link to={"media-learning/rfi"} className="box1">
                  <div className="media_box podcast_box1">
                    <div className="video_text">
                      <p>
                        Attaque de l'Iran : la population israélienne est sous
                        le choc
                      </p>
                      <h4> Journal • Français Facile - RFI</h4>
                    </div>
                  </div>
                </Link>

                <Link to={"media-learning/la-tour-eiffel"} className="box2">
                  <div className="media_box podcast_box2">
                    <div className="video_text">
                      <p>La tour Eiffel.</p>
                      <h4>Français facile</h4>
                    </div>
                  </div>
                </Link>

                <Link to={"media-learning/marie-curie"} className="box3">
                  <div className="media_box podcast_box3">
                    <div className="video_text">
                      <p>Marie Curie, une femme française</p>
                      <h4>Le French Podcast </h4>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// https://static.vecteezy.com/system/resources/thumbnails/003/126/412/small/language-courses-french-language-courses-back-to-school-abc-vector.jpg
// https://cursa-cat-img.s3.us-east-1.amazonaws.com/tags/en/french-a1.webp
