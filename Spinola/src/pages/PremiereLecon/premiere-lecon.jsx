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
              img="https://cdn-icons-png.flaticon.com/256/11532/11532902.png"
              description="Exercice : Utiliser la politesse pour déclarer votre intention."
              link="/learning/exercices/first-lessons/1/1_2/exercice1"
              idExercice="2"
              isDone={idMade.includes(2)}
            />
            <Lessonbox
              title="Comment allez-vous?"
              img="https://st3.depositphotos.com/6672868/15048/v/450/depositphotos_150488806-stock-illustration-handshake-flat-icon.jpg"
              description="Exercice : Dire comment vous allez au travail ou à votre logement."
              link="/learning/exercices/first-lessons/1/1_3/exercice1"
              idExercice="3"
              isDone={idMade.includes(3)}
            />
            <Lessonbox
              title="Développez votre apprentissage"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3WqXl8xs-w5hLH5y6KnT7gFTuV35yVxSGqho5y2ei1T8trWbTn3JXSYfZ8ZVytZEQRo&usqp=CAU"
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
              img="https://images.stockcake.com/public/b/2/f/b2f3f192-1a20-4170-ae14-ad93d3db1566_medium/friendly-conversation-stockcake.jpg"
              description="Apprenez les informel salutations"
              link="/learning/exercices/first-lessons/2/2_1/exercice1"
              idExercice="5"
              isDone={idMade.includes(5)}
            />
            <Lessonbox
              title="Ça va?"
              img="https://res.cloudinary.com/teepublic/image/private/s--8qOboeXB--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1674144606/production/designs/38559115_0.jpg"
              description="Exercice : Utiliser la politesse pour déclarer votre intention."
              link="/learning/exercices/first-lessons/2/2_2/exercice1"
              idExercice="6"
              isDone={idMade.includes(6)}
            />
            <Lessonbox
              title="Être"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6esoK6aflu6rCrsgvOfPPt3ulGc-PdD-hDw&s"
              description="Apprenez les bases du verbe être"
              link="/learning/exercices/first-lessons/2/2_3/exercice1"
              idExercice="7"
              isDone={idMade.includes(7)}
            />
            <Lessonbox
              title="En pratiquant le verbe être"
              img="https://static.vecteezy.com/system/resources/previews/021/552/364/non_2x/flat-illustration-of-man-and-woman-doing-exercise-couple-sitting-on-fitness-mats-and-doing-workout-using-dumbbells-on-beige-background-vector.jpg"
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
              img="https://www.bluezones.com/wp-content/uploads/2019/10/how-to-make-friends-as-an-adult-1-760x480.jpg"
              description="Améliorez vos compétences d'écoute en suivant une vidéo."
              link="/learning/exercices/first-lessons/3/3_1/exercice1"
              idExercice="9"
              isDone={idMade.includes(9)}
            />
            <Lessonbox
              title="Les nationalités "
              img="https://cdn-icons-png.flaticon.com/256/9235/9235315.png"
              description="Apprenez à dire votre nationalité et faire la différence entre le masculin et le féminin dans les prénoms et les nationalités."
              link="/learning/exercices/first-lessons/3/3_2/exercice1"
              idExercice="10"
              isDone={idMade.includes(10)}
            />
            <Lessonbox
              title="Les nationalités: Approfondir les formes masculines et féminines"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWuptRd1v1DiQBbKISX1MM1BUBK5FChnjtA&s"
              description="La distinction entre les formes masculines et féminines des nationalités et des prénoms."
              link="/learning/exercices/first-lessons/3/3_3/exercice1"
              idExercice="11"
              isDone={idMade.includes(11)}
            />
            <Lessonbox
              title={`Le pluriel de "être"`}
              img="https://cdn-icons-png.freepik.com/256/17041/17041290.png"
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
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_jYLRPs4VxySNYjsD4YcHcQ0mUhb4f3Hetg&s"
              description="Les nationalités au pluriel et ses formes masculines et féminines."
              link="/learning/exercices/first-lessons/4/4_1/exercice1"
              idExercice="13"
              isDone={idMade.includes(13)}
            />
            <Lessonbox
              title="Une anglaise à Paris"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rr4VcL62SgtZ8nekSQkh5xTWHNbkpC5EQA&s"
              description="Vous découvrirez les expériences d'une Anglaise vivant à Paris"
              link="/learning/exercices/first-lessons/4/4_2/exercice1"
              idExercice="14"
              isDone={idMade.includes(14)}
            />
            <Lessonbox
              title="Développement"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfS_j9m2O0LUZhyMtWzJNPgt76FKdq1MZneA&s"
              description="Développez vos compétences en français en écoutant des conversations."
              link="/learning/exercices/first-lessons/4/4_3/exercice1"
              idExercice="15"
              isDone={idMade.includes(15)}
            />
            <Lessonbox
              title="Révision rapide du chapitre 4"
              img="https://hthacademy.org.uk/wp-content/uploads/sites/135/sites/251/2021/10/Revision-scaled.jpg"
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
