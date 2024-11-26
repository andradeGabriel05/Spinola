import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import { useEffect } from "react";
import { exerciceCounter } from "../../../../../../global";

export default function Exercice11() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="100%"
        prevProgressExercice={"90.90%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>True or false?</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/b8bb4bb7-3cd6-40ee-b080-122cf03792bc_small.mp4" />
      <div className="exercice_text page_exercice_text text_left">
        <p>américain / américaine</p>
        <p>American</p>
        <p>(example)Tu es américain ?</p>
        <p>Are you American?</p>
      </div>
      <FooterExercices
        nextExercise={"/premiere-lecon"}
        last={true} 
        chapter={3} 
        exercise={2}
      />
    </div>
  );
}
