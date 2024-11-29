import "./timeLineA2.scss";
import Lessonbox from "../../components/LessonBox/lessonbox";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import LanguageFile from "../../language.json";

import axios from "axios";
const idMade = [];

export default function TimeLineA2() {
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
      <div className="container_premiere_lecon_a2">
        <div className="wrapper_welcome_a2">
          <div className="text">
            <h1>{LanguageFile.exercisesA1[language].title}</h1>
            <span>{LanguageFile.exercisesA1[language].description}</span>

            <Link to="/learning/exercices/a2/1/1_1/exercice1">
              {LanguageFile.exercisesA1[language].button}
            </Link>
          </div>
          <div rel="preload" className="image_welcome_a2"></div>
        </div>
      </div>

      <div className="lessons">
        <div className="chapters">
          <div className="lesson_wrapper">
            <h1>{LanguageFile.exercisesA1[language].chapter1}</h1>
            <Lessonbox
              title="Recalling the past"
              description={"Describe activities you did the day before"}
              img="https://cdn.busuu.com/media-resources/image/a/pr:lesson_s/plain/s3://busuu-logos-service-media-production/media-resources/image/27944cca-fc56-4e92-9b4e-1d773d9f18c7.jpg@jpg"
              link="/learning/exercices/a2/1/1_1/exercice1"
              idExercice="17"
              isDone={idMade.includes(17)}
            />
            <Lessonbox
              title={"Describing past events"}
              img="https://cdn.busuu.com/media-resources/image/a/pr:lesson_s/plain/s3://busuu-logos-service-media-production/media-resources/image/43435244-ccd2-4d5b-b49d-ea841bc291b2.jpg@jpg"
              description={
                LanguageFile.exercisesA1[language].exercises["1_2"].description
              }
              link="/learning/exercices/a2/1/1_2/exercice1"
              idExercice="18"
              isDone={idMade.includes(18)}
            />
            <Lessonbox
              title={"The passé composé: être and avoir"}
              img="https://cdn.busuu.com/media-resources/image/a/pr:lesson_s/plain/s3://busuu-logos-service-media-production/media-resources/image/6b0318d6-c514-4039-ac50-9a9ecab793af.jpg@jpg"
              description={"Use 'être' and 'avoir' with the passé composé"}
              link="/learning/exercices/a2/1/1_3/exercice1"
              idExercice="19"
              isDone={idMade.includes(19)}
            />
            <Lessonbox
              title={"Understanding yesterday's events"}
              img="https://www.uclaextension.edu/sites/default/files/styles/course_hero/public/2018-05/current-events-understanding-our-world-genint711-229.jpg?h=896b4e94&itok=n-H7EdFj"
              description={
                LanguageFile.exercisesA1[language].exercises["1_4"].description
              }
              link="/learning/exercices/a2/1/1_4/exercice1"
              idExercice="20"
              isDone={idMade.includes(20)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

// https://cdn.busuu.com/media-resources/video/mp4/85f20432-442d-482f-af59-7ad987f152c2_small.mp4
