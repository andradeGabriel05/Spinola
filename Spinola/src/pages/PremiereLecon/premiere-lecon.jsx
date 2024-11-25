import "./premiere-lecon.scss";
import Lessonbox from "../../components/LessonBox/lessonbox";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
const idMade = [];

export default function PremiereLecon() {
  const userId = localStorage.getItem("user");

  const [exercicesMade, setExercicesMade] = useState([]);

  async function handleExercicesMade() {
    try {
      const response = await axios.get(
        `http://localhost:3300/api/verify-exercises-made?userId=${userId}`
      );
      console.log(response.data);
      setExercicesMade(response.data);
      for (let i = 0; i < response.data.length; i++) {
        idMade.push(response.data[i].id_exercise);
        console.log(idMade);
      }
    } catch (error) {
      console.error("Erro ao buscar exercícios feitos:", error);
    }
  }

  useEffect(() => {
    handleExercicesMade();
  }, []);
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

            <Link link="/learning/exercices/first-lessons/1/1_1/exercice1">
              Commencer
            </Link>
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
              img="https://images.stockcake.com/public/9/e/0/9e001c2d-f9ec-4fb6-a3e1-87e40a1847a7_medium/parisian-sunset-glory-stockcake.jpg"
              link="/learning/exercices/first-lessons/1/1_1/exercice1"
              idExercice="1"
              isDone={idMade.includes(1)}
            />
            <Lessonbox
              title="La politesse"
              img="https://picsum.photos/200/300?random=2"
              description="Exercice : Utiliser la politesse pour déclarer votre intention."
              link="/learning/exercices/first-lessons/1/1_2/exercice1"
              idExercice="2"
              isDone={idMade.includes(2)}
            />
            <Lessonbox
              title="Comment allez-vous?"
              img="https://picsum.photos/200/300?random=3"
              description="Exercice : Dire comment vous allez au travail ou à votre logement."
              link="/learning/exercices/first-lessons/1/1_3/exercice1"
              idExercice="3"
              isDone={idMade.includes(3)}
            />
            <Lessonbox
              title="Exprimer votre émotion."
              img="https://picsum.photos/200/300?random=4"
              description="Exercice : Utiliser des phrases de déclaration pour exprimer votre émotion."
              link="/learning/exercices/first-lessons/1/1_4/exercice1"
              idExercice="4"
              isDone={idMade.includes(4)}
            />
          </div>
          <div className="lesson_wrapper">
            <h1>Chapter 2: Essentials</h1>
            <Lessonbox
              title="Informel salutations"
              img="https://picsum.photos/200/300?random=5"
              description="Exercice : Dire bonjour à une personne et lui parler de soi."
              link="/learning/exercices/first-lessons/2/2_1/exercice1"
              idExercice="5"
              isDone={idMade.includes(5)}
            />
            <Lessonbox
              title="La politesse"
              img="https://picsum.photos/200/300?random=6"
              description="Exercice : Utiliser la politesse pour déclarer votre intention."
              link="/learning/exercices/first-lessons/2/2_2/exercice1"
              idExercice="6"
              isDone={idMade.includes(6)}
            />
            <Lessonbox
              title="Être"
              img="https://picsum.photos/200/300?random=7"
              description="Apprenez les bases du verbe être"
              link="/learning/exercices/first-lessons/2/2_3/exercice1"
              idExercice="7"
              isDone={idMade.includes(7)}
            />
            <Lessonbox
              title="En pratiquant le verbe être"
              img="https://picsum.photos/200/300?random=8"
              description='Pratiquez le verbe "être" en français avec des phrases simples.'
              link="/learning/exercices/first-lessons/2/2_4/exercice1"
              idExercice="8"
              isDone={idMade.includes(8)}
            />
          </div>
          <div className="lesson_wrapper">
            <h1>Chapter 3: Essentials</h1>
            <Lessonbox
              title="Suite à une interaction de base"
              img="https://picsum.photos/200/300?random=9"
              description="Améliorez vos compétences d'écoute en suivant une vidéo."
              link="/learning/exercices/first-lessons/3/3_1/exercice1"
              idExercice="9"
              isDone={idMade.includes(9)}
            />
            <Lessonbox
              title="Les nationalités "
              img="https://picsum.photos/200/300?random=10"
              description="Apprenez à dire votre nationalité et faire la différence entre le masculin et le féminin dans les prénoms et les nationalités."
              link="/learning/exercices/first-lessons/3/3_2/exercice1"
              idExercice="10"
              isDone={idMade.includes(10)}
            />
            <Lessonbox
              title="Les nationalités: Approfondir les formes masculines et féminines"
              img="https://picsum.photos/200/300?random=11"
              description="La distinction entre les formes masculines et féminines des nationalités et des prénoms."
              link="/learning/exercices/first-lessons/3/3_3/exercice1"
              idExercice="11"
              isDone={idMade.includes(11)}
            />
            <Lessonbox
              title={`Le pluriel de "être"`}
              img="https://picsum.photos/200/300?random=12"
              description="Apprenez à conjuguer le verbe 'être' au pluriel et à l'utiliser dans des phrases simples. "
              link="/learning/exercices/first-lessons/3/3_4/exercice1"
              idExercice="12"
              isDone={idMade.includes(12)}
            />
          </div>
          <div className="lesson_wrapper">
            <h1>Chapter 4: Essentials</h1>
            <Lessonbox
              title="Le pluriel de les nationalités"
              img="https://picsum.photos/200/300?random=13"
              description="Les nationalités au pluriel et ses formes masculines et féminines."
              link="/learning/exercices/first-lessons/4/4_1/exercice1"
              idExercice="13"
              isDone={idMade.includes(13)}
            />
            <Lessonbox
              title="Une anglaise à Paris"
              img="https://picsum.photos/200/300?random=14"
              description="Vous découvrirez les expériences d'une Anglaise vivant à Paris"
              link="/learning/exercices/first-lessons/4/4_2/exercice1"
              idExercice="14"
              isDone={idMade.includes(14)}
            />
            <Lessonbox
              title="Développement "
              img="https://picsum.photos/200/300?random=15"
              description="Développez vos compétences en français en écoutant des conversations."
              link="/learning/exercices/first-lessons/4/4_3/exercice1"
              idExercice="15"
              isDone={idMade.includes(15)}
            />
            <Lessonbox
              title="Exprimer votre émotion."
              img="https://picsum.photos/200/300?random=16"
              description="Exercice : Utiliser des phrases de déclaration pour exprimer votre émotion."
              link="/learning/exercices/first-lessons/4/4_4/exercice1"
              idExercice="16"
              isDone={idMade.includes(16)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

// https://cdn.busuu.com/media-resources/video/mp4/85f20432-442d-482f-af59-7ad987f152c2_small.mp4
