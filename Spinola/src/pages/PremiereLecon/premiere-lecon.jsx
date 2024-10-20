import "./premiere-lecon.scss";

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

      <div className="lessons">
        <div className="chapters">
          <div className="lesson1">
            <h1>Chapter 1: Introductions</h1>
            <div className="lessons_content">
              <div className="lesson_icon">
                <img src="https://via.placeholder.com/50" alt="icon_lesson" />
              </div>
              <div className="lesson_box">
                <h2>1.1 Bonjour et bienvenue</h2>
                <p>
                  Exercice : Dire bonjour à une personne et lui parler de soi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
