import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";
import LanguageFile from "../../../../../../language";

export default function Exercice1() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);
  const language = localStorage.getItem("language");

  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="33.33%" prevProgressExercice="22.22%"/>

      <div className="exercice_title page_exercice_text">
      {LanguageFile.exerciseTitles[language].newWord}
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/529b109d-4756-491b-8514-08210e72c15b_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Je suis sortie.</p>
          <p>I went out.</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/a2/1/1_2/exercice2"}
      />
    </div>
  );
}
