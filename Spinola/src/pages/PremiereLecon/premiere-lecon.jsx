import "./premiere-lecon.scss";
import { Link } from "react-router-dom";

export default function PremiereLecon() {
  return (
    <>
      <div className="container_premiere_lecon">
        <div className="wrapper_welcome">
          <div className="text">
            <h1>Débuter gratuitement en français</h1>
            <span>
              Dire bonjour, parler de soi, trouver un logement, faire les
              courses... 500 exercices gratuits pour apprendre le français au
              niveau débutant à partir de vidéos. 
            </span>
            <a href="/">Commencer</a>
          </div>
          <div className="image_welcome"></div>
        </div>
      </div>

{/* I need to create a component for this... god... */}
      <div className="lessons">
        <div className="chapters">
          <div className="lesson_wrapper">
            <h1>Chapter 1: Introductions</h1>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzdG3DC4WxUGWRlrgMGUEuXseeg44rgxb8A&s"
                    alt="icon_lesson"
                  />
                </div>
                <div className="lesson_box">
                  <h2>1.1 Bonjour!</h2>
                  <p>
                    Exercice : Dire bonjour à une personne et lui parler de soi.
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://i1.sndcdn.com/artworks-000563955905-7cd5b2-t500x500.jpg" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.2 La politesse</h2>
                  <p>
                    Exercice : Utiliser la politesse pour déclarer votre
                    intention.
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=3" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.3 Comment allez-vous?</h2>
                  <p>
                    Exercice : Dire comment vous allez au travail ou à votre
                    logement.
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=4" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.4 Exprimer votre émocion.</h2>
                  <p>
                    Exercice : Utiliser des phrases de déclaration pour exprimer
                    votre émotion.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="lesson_wrapper">
            <h1>Chapter 2: Essentials</h1>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=5" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.1 Informel salutations</h2>
                  <p>
                    Exercice : Dire bonjour à une personne et lui parler de soi.
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=6" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.2 La politesse</h2>
                  <p>
                    Exercice : Utiliser la politesse pour déclarer votre
                    intention.
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=7" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.3 comment allez-vous?</h2>
                  <p>
                    Exercice : Dire comment vous allez au travail ou à votre
                    logement.
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=8" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.4 Écouter une conversation simple.</h2>
                  <p>
                    Exercice : Écouter une conversation simple et comprendre les
                    éléments de base.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="lesson_wrapper">
            <h1>Chapter 3: Essentials</h1>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=9" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.1 Bonjour et bienvenue</h2>
                  <p>
                    Exercice : Dire bonjour à une personne et lui parler de soi.
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=10" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.2 Votre nationalité</h2>
                  <p>
                    Exercice : Dire votre nationalité et faire la différence
                    entre le masculin et le féminin dans les prénoms et les
                    nationalités.
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=11" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.3 comment allez-vous?</h2>
                  <p>
                    Exercice : Dire comment vous allez au travail ou à votre
                    logement.
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=12" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.4 Écouter une conversation simple.</h2>
                  <p>
                    Exercice : Écouter une conversation simple et comprendre les
                    éléments de base.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="lesson_wrapper">
            <h1>Chapter 4: Essentials</h1>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=13" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.1 Bonjour et bienvenue</h2>
                  <p>
                    Exercice : Dire bonjour à une personne et lui parler de soi.
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=14" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.2 La politesse</h2>
                  <p>
                    Exercice : Utiliser la politesse pour déclarer votre
                    intention.
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=15" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.3 comment allez-vous?</h2>
                  <p>
                    Exercice : Dire comment vous allez au travail ou à votre
                    logement.
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="lessons_content">
                <div className="lesson_icon">
                  <img src="https://picsum.photos/75/75?random=16" alt="icon_lesson" />
                </div>
                <div className="lesson_box">
                  <h2>1.4 Exprimer votre émocion.</h2>
                  <p>
                    Exercice : Utiliser des phrases de déclaration pour exprimer
                    votre émotion.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


// https://cdn.busuu.com/media-resources/video/mp4/85f20432-442d-482f-af59-7ad987f152c2_small.mp4