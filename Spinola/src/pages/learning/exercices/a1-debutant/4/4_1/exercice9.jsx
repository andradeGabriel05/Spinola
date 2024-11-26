import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import { useEffect } from "react";
import { exerciceCounter } from "../../../../../../global";

export default function Exercice9() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="100%"
        prevProgressExercice={"88.88%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>New Word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/63463b9e-8b5a-40c3-8a6e-924ee4d169b1_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Elles sont allemandes.</p>
          <p>They are German.</p>
        </div>
      </div>
      <FooterExercices
        nextExercise="/learning/exercices/first-lessons/4/4_1/exercice10"
      />
    </div>
  );
}
