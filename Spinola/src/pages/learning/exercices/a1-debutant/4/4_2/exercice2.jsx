import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import audio from "Spinola/public/recordsExercices/p_32757226_503.mp3";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";

export default function Exercice2() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="28%"
        prevProgressExercice={"14.28%"}
      />

      {/* <div className="exercice_title page_exercice_text">
        <p>Tu es de quelle nationalité ? </p>
      </div> */}

      <VideoExercices
        miniature={
          "https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/7ca2f43e-a46a-49de-8ef5-6f81d1318165.jpg@jpg"
        }
        audio={audio}
      />

      <div className="exercice_text page_exercice_text">
        <p>L'auberge espagnole</p>
        <p>
          Salut et enchantée ! Je m’appelle Lison, je suis anglaise et je suis à
          Paris, en France. Je suis toujours contente ! Et voici mes amis : Andy
          est américain, il est un peu impatient. Tina et Oskar sont allemands,
          ils sont souvent fatigués ! Nous sommes une vraie auberge espagnole !
          Et toi, tu es de quelle nationalité, comment tu t’appelles ?
        </p>
      </div>

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/4/4_2/exercice3"}
      />
    </div>
  );
}
