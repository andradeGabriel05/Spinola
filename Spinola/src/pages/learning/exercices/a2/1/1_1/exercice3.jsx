import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { useEffect, useState } from "react";
import { exerciceCounter } from "../../../../../../global";
import LanguageFile from "../../../../../../language.json";

export default function Exercice3() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  console.log(exerciceCounter);

  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="37.5%" prevProgressExercice="25%" />
      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/6f1539db-f9e8-4807-a208-a3181d6d483f_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>J'ai traîné.</p>
          <p>I idled around.</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/a2/1/1_1/exercice4"}
      />
    </div>
  );
}
