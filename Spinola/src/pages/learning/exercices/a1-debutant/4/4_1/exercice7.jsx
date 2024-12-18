import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import { useEffect } from "react";
import { exerciceCounter } from "../../../../../../global";

import LanguageFile from "../../../../../../language.json";
export default function Exercice7() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  const language = localStorage.getItem("language");

  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="63.63%"
        prevProgressExercice={"54.54%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/c1818fa2-5b5d-458c-b51a-5e235c155b6f_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Ils sont allemands.</p>
          <p>{LanguageFile.exercise4_1[language].e7.text}</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/4/4_1/exercice8"}
      />
    </div>
  );
}
