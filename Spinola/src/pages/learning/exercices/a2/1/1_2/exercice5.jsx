import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";
import LanguageFile from "../../../../../../language";
export default function Exercice5() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="55.55%"
        prevProgressExercice="44.44%"
      />

      <div className="exercice_title page_exercice_text">
        <p> {LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/ff4c2b6b-26ea-4d07-808e-f6f7967ce8df_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Je suis allée au resto.</p>
          <p>I went to the restaurant.</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/a2/1/1_2/exercice6"}
      />
    </div>
  );
}
