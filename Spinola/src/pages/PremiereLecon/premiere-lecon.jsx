import "./premiere-lecon.scss";
import Lessonbox from "../../components/LessonBox/lessonbox";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import LanguageFile from "../../language.json";

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

  const language = localStorage.getItem("language");

  useEffect(() => {
    handleExercicesMade();
  }, []);
  return (
    <>
      <div className="container_premiere_lecon">
        <div className="wrapper_welcome">
          <div className="text">
            <h1>{LanguageFile.exercisesA1[language].title}</h1>
            <span>{LanguageFile.exercisesA1[language].description}</span>

            <Link link="/learning/exercices/first-lessons/1/1_1/exercice1">
              {LanguageFile.exercisesA1[language].button}
            </Link>
          </div>
          <div rel="preload" className="image_welcome"></div>
        </div>
      </div>

      <div className="lessons">
        <div className="chapters">
          <div className="lesson_wrapper">
            <h1>{LanguageFile.exercisesA1[language].chapter1}</h1>
            <Lessonbox
              title="Bonjour!"
              description={
                LanguageFile.exercisesA1[language].exercises["1_1"].description
              }
              img="https://images.stockcake.com/public/9/e/0/9e001c2d-f9ec-4fb6-a3e1-87e40a1847a7_medium/parisian-sunset-glory-stockcake.jpg"
              link="/learning/exercices/first-lessons/1/1_1/exercice1"
              idExercice="1"
              isDone={idMade.includes(1)}
            />
            <Lessonbox
              title={
                LanguageFile.exercisesA1[language].exercises["1_2"].description
              }
              img="https://cdn-icons-png.flaticon.com/256/11532/11532902.png"
              description={
                LanguageFile.exercisesA1[language].exercises["1_2"].description
              }
              link="/learning/exercices/first-lessons/1/1_2/exercice1"
              idExercice="2"
              isDone={idMade.includes(2)}
            />
            <Lessonbox
              title={
                LanguageFile.exercisesA1[language].exercises["1_3"].description
              }
              img="https://st3.depositphotos.com/6672868/15048/v/450/depositphotos_150488806-stock-illustration-handshake-flat-icon.jpg"
              description={
                LanguageFile.exercisesA1[language].exercises["1_3"].description
              }
              link="/learning/exercices/first-lessons/1/1_3/exercice1"
              idExercice="3"
              isDone={idMade.includes(3)}
            />
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["1_4"].title}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3WqXl8xs-w5hLH5y6KnT7gFTuV35yVxSGqho5y2ei1T8trWbTn3JXSYfZ8ZVytZEQRo&usqp=CAU"
              description={
                LanguageFile.exercisesA1[language].exercises["1_4"].description
              }
              link="/learning/exercices/first-lessons/1/1_4/exercice1"
              idExercice="4"
              isDone={idMade.includes(4)}
            />
          </div>
          <div className="lesson_wrapper">
            <h1>Chapter 2: Essentials</h1>
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["2_1"].title}
              img="https://images.stockcake.com/public/b/2/f/b2f3f192-1a20-4170-ae14-ad93d3db1566_medium/friendly-conversation-stockcake.jpg"
              description={
                LanguageFile.exercisesA1[language].exercises["2_1"].description
              }
              link="/learning/exercices/first-lessons/2/2_1/exercice1"
              idExercice="5"
              isDone={idMade.includes(5)}
            />
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["2_2"].title}
              img="https://res.cloudinary.com/teepublic/image/private/s--8qOboeXB--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1674144606/production/designs/38559115_0.jpg"
              description={
                LanguageFile.exercisesA1[language].exercises["2_2"].description
              }
              link="/learning/exercices/first-lessons/2/2_2/exercice1"
              idExercice="6"
              isDone={idMade.includes(6)}
            />
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["2_3"].title}
              img="https://cdn-icons-png.flaticon.com/256/11392/11392912.png"
              description={
                LanguageFile.exercisesA1[language].exercises["2_3"].description
              }
              link="/learning/exercices/first-lessons/2/2_3/exercice1"
              idExercice="7"
              isDone={idMade.includes(7)}
            />
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["2_4"].title}
              img="https://static.vecteezy.com/system/resources/previews/021/552/364/non_2x/flat-illustration-of-man-and-woman-doing-exercise-couple-sitting-on-fitness-mats-and-doing-workout-using-dumbbells-on-beige-background-vector.jpg"
              description={
                LanguageFile.exercisesA1[language].exercises["2_4"].description
              }
              link="/learning/exercices/first-lessons/2/2_4/exercice1"
              idExercice="8"
              isDone={idMade.includes(8)}
            />
          </div>
          <div className="lesson_wrapper">
            <h1>Chapter 3: Essentials</h1>
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["3_1"].title}
              img="https://www.bluezones.com/wp-content/uploads/2019/10/how-to-make-friends-as-an-adult-1-760x480.jpg"
              description={
                LanguageFile.exercisesA1[language].exercises["3_1"].description
              }
              link="/learning/exercices/first-lessons/3/3_1/exercice1"
              idExercice="9"
              isDone={idMade.includes(9)}
            />
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["3_2"].title}
              img="https://cdn-icons-png.flaticon.com/256/9235/9235315.png"
              description={
                LanguageFile.exercisesA1[language].exercises["3_2"].description
              }
              link="/learning/exercices/first-lessons/3/3_2/exercice1"
              idExercice="10"
              isDone={idMade.includes(10)}
            />
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["3_3"].title}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWuptRd1v1DiQBbKISX1MM1BUBK5FChnjtA&s"
              description={
                LanguageFile.exercisesA1[language].exercises["3_3"].description
              }
              link="/learning/exercices/first-lessons/3/3_3/exercice1"
              idExercice="11"
              isDone={idMade.includes(11)}
            />
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["3_4"].title}
              img="https://cdn-icons-png.freepik.com/256/17041/17041290.png"
              description={
                LanguageFile.exercisesA1[language].exercises["3_4"].description
              }
              link="/learning/exercices/first-lessons/3/3_4/exercice1"
              idExercice="12"
              isDone={idMade.includes(12)}
            />
          </div>
          <div className="lesson_wrapper">
            <h1>Chapter 4: Essentials</h1>
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["4_1"].title}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_jYLRPs4VxySNYjsD4YcHcQ0mUhb4f3Hetg&s"
              description={
                LanguageFile.exercisesA1[language].exercises["4_1"].description
              }
              link="/learning/exercices/first-lessons/4/4_1/exercice1"
              idExercice="13"
              isDone={idMade.includes(13)}
            />
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["4_2"].title}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rr4VcL62SgtZ8nekSQkh5xTWHNbkpC5EQA&s"
              description={
                LanguageFile.exercisesA1[language].exercises["4_2"].description
              }
              link="/learning/exercices/first-lessons/4/4_2/exercice1"
              idExercice="14"
              isDone={idMade.includes(14)}
            />
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["4_3"].title}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfS_j9m2O0LUZhyMtWzJNPgt76FKdq1MZneA&s"
              description={
                LanguageFile.exercisesA1[language].exercises["4_3"].description
              }
              link="/learning/exercices/first-lessons/4/4_3/exercice1"
              idExercice="15"
              isDone={idMade.includes(15)}
            />
            <Lessonbox
              title={LanguageFile.exercisesA1[language].exercises["4_4"].title}
              img="https://hthacademy.org.uk/wp-content/uploads/sites/135/sites/251/2021/10/Revision-scaled.jpg"
              description={
                LanguageFile.exercisesA1[language].exercises["4_4"].description
              }
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
