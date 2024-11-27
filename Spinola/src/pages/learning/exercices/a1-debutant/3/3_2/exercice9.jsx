import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import { useEffect } from "react";
import { exerciceCounter } from "../../../../../../global";

import LanguageFile from "../../../../../../language";

export default function Exercice9() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  const language = localStorage.getItem("language");

  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="81.81%"
        prevProgressExercice={"72.72%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].trueOrFalse}</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/e942ffa0-9bfd-4d18-9839-941d4c5e7e07_small.mp4" />
      <div className="exercice_text page_exercice_text">
        <p>mexicain / mexicaine</p>
        <p>{LanguageFile.exercise3_2[language].e9.text1}</p>
        <p>{LanguageFile.exercise3_2[language].e9.text2}</p>
        <p>{LanguageFile.exercise3_2[language].e9.text3}</p>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/3/3_2/exercice10"}
      />
    </div>
  );
}
