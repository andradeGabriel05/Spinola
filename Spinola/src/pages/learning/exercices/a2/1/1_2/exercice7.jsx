import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";
import LanguageFile from "../../../../../../language";

export default function Exercice7() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);
  const language = localStorage.getItem("language");

  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="80%" prevProgressExercice="77.77%"/>

      <div className="exercice_title page_exercice_text">
      <p>{LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/f0c2ae5b-94db-4d97-b0f5-472cf1964e62_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Je me suis promené. </p>
          <p>I had a stroll.</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/a2/1/1_2/exercice8"}
      />
    </div>
  );
}
