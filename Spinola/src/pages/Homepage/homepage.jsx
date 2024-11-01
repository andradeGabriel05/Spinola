import "./homepage.scss";
import { Link } from "react-router-dom";
import ActivatedButton from "../../components/ActivatedButton/activatedButton";

export default function homepage() {
  return (
    <div className="container_homepage">
      <section className="container_homepage_navigation_levels">
        <div className="levels">
          <ActivatedButton link="/">
            A1 Débutant
          </ActivatedButton >
        </div>
        <div className="levels">
          <ActivatedButton link="/a2">
            A2 Élémentaire
          </ActivatedButton >
        </div>
        <div className="levels">
          <ActivatedButton link="/a3">
            B1 Intermédiaire
          </ActivatedButton >
        </div>
        <div className="levels">
          <ActivatedButton link="/a4">
            B2 Avancé
          </ActivatedButton >
        </div>
      </section>

      <section className="homepage_main">
        <div className="homepage_main_content">
          <div className="left_side">
            <Link to="/premiere-lecon" className="wrapper-message-user-home">
              <div className="card1">
                <div className="image_card"></div>
                <div className="text">
                  <p>Collection</p>
                  <h2>Première Leçon</h2>
                </div>
              </div>
            </Link>
          </div>
          <div className="right_side">
            <div className="card2">
              <div className="image_card"></div>
              <div className="text">
                <p>Bonjour!</p>
                <h2>Apprenez à dire bonjour et à vous présenter.</h2>
              </div>
            </div>
            <div className="card3">
              <h2>Titre de la carte 3</h2>
              <p>Description de la carte 3</p>
            </div>
          </div>
        </div>
      </section>
      <section className="books_section">
        <div className="books_container">
          <div className="content">
            <div className="usilles-text">
              <h1>
                Le site gratuit pour améliorer facilement sa compréhension du
                français à partir de vidéos
              </h1>
              <div className="division_border_div">
                <div className="division_border"></div>
              </div>
            </div>
            <div className="wrapper-content">
              <div className="text">
                <h1>Telechargé des livres</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ratione neque, tenetur impedit, voluptatibus explicabo esse
                  adipisci molestias eaque rerum nisi corporis expedita sunt
                  vero quaerat et. Cupiditate numquam facilis repudiandae
                  consectetur dolore quis. Vitae, quae. Adipisci voluptas
                  recusandae nobis non, nihil explicabo pariatur illo enim nam
                  tenetur officia facere expedita?
                </p>
                <Link to="/download-books">
                  <button>Voir plus de cours</button>
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

      <section className="media_section">
        <div className="media_container">
          <div className="content">
            <div className="text">
              <h1>Apprendre le français avec des média</h1>
            </div>
            <div className="media_flex">
              <h3>Vidéos</h3>
              <div className="content_wrapper">
                <div className="media_box video_box1">
                  <div className="video_text">
                    <p>
                      Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                    </p>
                    <h4>Coffee Break Languages</h4>
                  </div>
                </div>
                <div className="media_box video_box2">
                  <div className="video_text">
                    <p>
                      Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                    </p>
                    <h4>Coffee Break Languages</h4>
                  </div>
                </div>
                <div className="media_box video_box3">
                  <div className="video_text">
                    <p>
                      Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                    </p>
                    <h4>Coffee Break Languages</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="media_flex">
              <h3>Musiques</h3>
              <div className="content_wrapper">
                <div className="media_box musique_box1">
                  <div className="video_text">
                    <p>
                      Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                    </p>
                    <h4>Coffee Break Languages</h4>
                  </div>
                </div>

                <div className="media_box musique_box2">
                  <div className="video_text">
                    <p>
                      Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                    </p>
                    <h4>Coffee Break Languages</h4>
                  </div>
                </div>
                <div className="media_box musique_box3">
                  <div className="video_text">
                    <p>
                      Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                    </p>
                    <h4>Coffee Break Languages</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="media_flex">
              <h3>Podcasts</h3>
              <div className="content_wrapper">
                <div className="media_box podcast_box1">
                  <div className="video_text">
                    <p>
                      Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                    </p>
                    <h4>Coffee Break Languages</h4>
                  </div>
                </div>
                <div className="media_box podcast_box2">
                  <div className="video_text">
                    <p>
                      Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                    </p>
                    <h4>Coffee Break Languages</h4>
                  </div>
                </div>
                <div className="media_box podcast_box3">
                  <div className="video_text">
                    <p>
                      Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                    </p>
                    <h4>Coffee Break Languages</h4>
                  </div>
                </div>
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
