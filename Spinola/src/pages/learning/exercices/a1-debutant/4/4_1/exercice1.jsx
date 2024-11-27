import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";

import LanguageFile from "../../../../../../Language";

export default function Exercice1() {
  useEffect(() => {
    exerciceCounter.length = 0
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  const language = localStorage.getItem("language");

  console.log(exerciceCounter);
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="9.09%" prevProgressExercice={"0%"} />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/cefaa4cf-d8c2-4628-af9c-466f95608b46_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Nous sommes anglaises.</p>
          <p>{LanguageFile.exercise4_1[language].e1.text}</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/4/4_1/exercice2"}
      />
    </div>
  );
}
