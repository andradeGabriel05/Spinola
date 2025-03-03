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
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/9cd9f168-5944-4f83-b385-b814e7b50930_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Je m'appele Sab</p>
          <p>{LanguageFile.exercise1_1[language].e3.text}</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/1/1_1/exercice4"}
      />
    </div>
  );
}
