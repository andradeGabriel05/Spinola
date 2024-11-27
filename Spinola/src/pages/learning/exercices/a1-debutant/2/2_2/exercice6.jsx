import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";

import LanguageFile from "../../../../../../language";

export default function Exercice6() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  const language = localStorage.getItem("language");

  return (

    <div className="container_exercise">
      <HeaderExercices progressExercice="66.66%" prevProgressExercice="55.55%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <VideoExercices videoSrc="https://static.memrise.com/uploads/items/videos/medium/IAV_ALX22FR02_ZADE112_116635_65880726__14571__f_normalized.mp4#t=0.1" />

      <div className="exercice_text page_exercice_text">
        <p>Très bien</p>
        <p>{LanguageFile.exercise2_2[language].e6.text}</p>
      </div>

      <FooterExercices
        nextExercise="/learning/exercices/first-lessons/2/2_2/exercice7"
      />
    </div>
  );
}
