import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";

export default function Exercice5() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="62.5%" prevProgressExercice="50%" />

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/0c6fd924-d1fc-4b3c-b44d-cca95c2217d6_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Au revoir!</p>
          <p>Goodbye!</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/1/1_1/exercice6"}
      />
    </div>
  );
}
