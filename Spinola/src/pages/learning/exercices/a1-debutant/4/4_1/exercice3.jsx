import { useEffect } from "react";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";


export default function Exercice3() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);


  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="22.22%" prevProgressExercice={"11.11%"} />

      <div className="exercice_title page_exercice_text">
        <p>New word</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/b12a7642-4899-4629-a540-441d242192b3_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Vous êtes américains ?</p>
          <p>Are you Americans?</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/4/4_1/exercice4"}
      />
    </div>
  );
}
