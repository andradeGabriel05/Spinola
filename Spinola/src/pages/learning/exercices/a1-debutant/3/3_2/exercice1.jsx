import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";

import LanguageFile from "../../../../../../language";
export default function Exercice1() {
  exerciceCounter.length = 0;
  exerciceCounter.push("correct");

  console.log(exerciceCounter);
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="9.09%" prevProgressExercice={"0%"}/>

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/2eaee6af-6243-464c-b61a-5f57b7148abb_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Tu es de quelle nationalité ?</p>
          <p>{LanguageFile.exercise3_2[language].e1.text1}</p>
          <p>{LanguageFile.exercise3_2[language].e1.text2}</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/3/3_2/exercice2"}
      />
    </div>
  );
}
