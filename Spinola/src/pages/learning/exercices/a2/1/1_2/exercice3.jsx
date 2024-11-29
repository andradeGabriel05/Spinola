import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";
import LanguageFile from "../../../../../../language";

export default function Exercice3() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);
  const language = localStorage.getItem("language");

  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="33.33%" prevProgressExercice="22.22%"/>

      <div className="exercice_title page_exercice_text">
      <p>{LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/8841d1d9-08d9-48b7-a6ff-e9c565317b65_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Je suis resté à la maison.</p>
          <p>I stayed at home.</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/a2/1/1_2/exercice4"}
      />
    </div>
  );
}
