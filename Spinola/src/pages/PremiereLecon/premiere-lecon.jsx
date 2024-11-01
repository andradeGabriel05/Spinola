import "./premiere-lecon.scss";
import Lessonbox from "../../components/LessonBox/lessonbox";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function PremiereLecon() {
  const location = useLocation();

  useEffect(() => {
    // Pode adicionar lógica aqui para recarregar recursos se a rota mudar
    console.log("Rota mudou: ", location.pathname);
  }, [location]);
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

            <Link to="/learning/exercices/premiere-lessons/1/1_1/exercice1">Commencer</Link>
          </div>
          <div rel="preload" className="image_welcome"></div>
        </div>
      </div>

      <div className="lessons">
        <div className="chapters">
          <div className="lesson_wrapper">
            <h1>Chapter 1: Introductions</h1>
            <Lessonbox
              title="Bonjour!"
              description="Exercice : Dire bonjour à une personne et lui parler de soi."
              img="https://picsum.photos/200/300?random=1"
              to="/learning/exercices/premiere-lessons/1/1_1/exercice1"
            />
            <Lessonbox
              title="La politesse"
              img="https://picsum.photos/200/300?random=2"
              description="Exercice : Utiliser la politesse pour déclarer votre intention."
              to="/learning/exercices/premiere-lessons/1/1_2/exercice1"
            />
            <Lessonbox
              title="Comment allez-vous?"
              img="https://picsum.photos/200/300?random=3"
              description="Exercice : Dire comment vous allez au travail ou à votre logement."
              to="/learning/exercices/premiere-lessons/1/1_3/exercice1"
            />
            <Lessonbox
              title="Exprimer votre émotion."
              img="https://picsum.photos/200/300?random=4"
              description="Exercice : Utiliser des phrases de déclaration pour exprimer votre émotion."
              to="/learning/exercices/premiere-lessons/1/1_4/exercice1"
            />
          </div>
          <div className="lesson_wrapper">
            <h1>Chapter 2: Essentials</h1>
            <Lessonbox
              title="Informel salutations"
              img="https://picsum.photos/200/300?random=5"
              description="Exercice : Dire bonjour à une personne et lui parler de soi."
              to="/learning/exercices/premiere-lessons/2/2_1/exercice1"
            />
            <Lessonbox
              title="La politesse"
              img="https://picsum.photos/200/300?random=6"
              description="Exercice : Utiliser la politesse pour déclarer votre intention."
              to="/learning/exercices/premiere-lessons/2/2_2/exercice1"
            />
            <Lessonbox
              title="Comment allez-vous?"
              img="https://picsum.photos/200/300?random=7"
              description="Exercice : Dire comment vous allez au travail ou à votre logement."
              to="/learning/exercices/premiere-lessons/2/2_3/exercice1"
            />
            <Lessonbox
              title="Écouter une conversation simple."
              img="https://picsum.photos/200/300?random=8"
              description="Exercice : Écouter une conversation simple et comprendre les éléments de base."
              to="/learning/exercices/premiere-lessons/2/2_4/exercice1"
            />
          </div>
          <div className="lesson_wrapper">
            <h1>Chapter 3: Essentials</h1>
            <Lessonbox
              title="Bonjour et bienvenue"
              img="https://picsum.photos/200/300?random=9"
              description="Exercice : Dire bonjour à une personne et lui parler de soi."
            />
            <Lessonbox
              title="Votre nationalité"
              img="https://picsum.photos/200/300?random=10"
              description="Exercice : Dire votre nationalité et faire la différence entre le masculin et le féminin dans les prénoms et les nationalités."
            />
            <Lessonbox
              title="Comment allez-vous?"
              img="https://picsum.photos/200/300?random=11"
              description="Exercice : Dire comment vous allez au travail ou à votre logement."
            />
            <Lessonbox
              title="Écouter une conversation simple."
              img="https://picsum.photos/200/300?random=12"
              description="Exercice : Écouter une conversation simple et comprendre les éléments de base."
            />
          </div>
          <div className="lesson_wrapper">
            <h1>Chapter 4: Essentials</h1>
            <Lessonbox
              title="Bonjour et bienvenue"
              img="https://picsum.photos/200/300?random=13"
              description="Exercice : Dire bonjour à une personne et lui parler de soi."
            />
            <Lessonbox
              title="La politesse"
              img="https://picsum.photos/200/300?random=14"
              description="Exercice : Utiliser la politesse pour déclarer votre intention."
            />
            <Lessonbox
              title="Comment allez-vous?"
              img="https://picsum.photos/200/300?random=15"
              description="Exercice : Dire comment vous allez au travail ou à votre logement."
            />
            <Lessonbox
              title="Exprimer votre émotion."
              img="https://picsum.photos/200/300?random=16"
              description="Exercice : Utiliser des phrases de déclaration pour exprimer votre émotion."
            />
          </div>
        </div>
      </div>
    </>
  );
}

// https://cdn.busuu.com/media-resources/video/mp4/85f20432-442d-482f-af59-7ad987f152c2_small.mp4
