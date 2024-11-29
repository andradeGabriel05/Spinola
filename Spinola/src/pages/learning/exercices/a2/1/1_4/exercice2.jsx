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
import LanguageFile from "../../../../../../language";

export default function Exercice2() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  const language = localStorage.getItem("language");

  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="35%" prevProgressExercice={"28.57%"} />

      <div className="exercice_title page_exercice_text">
        <p>Read Sandra and Sophie's chat and notice the words in bold.</p>
      </div>

      <VideoExercices
        miniature={
          "https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/14fbd594-3f22-4d12-9f32-b3c4c99793fe.jpg@jpg"
        }
        audio={
          "https://cdn.busuu.com/media-resources/audio/9064d81f-1fae-401a-ab8b-06cef5b06418.mp3"
        }
      />

      <VideoBoolExercices
        answer_1={LanguageFile.trueOrFalse[language].true}
        answer_2={LanguageFile.trueOrFalse[language].false}
        correctAnswer={LanguageFile.trueOrFalse[language].true}
        question="Sophie talks about events in the past."
        nextExercise={"/learning/exercices/a2/1/1_4/exercice3"}
      />
    </div>
  );
}
