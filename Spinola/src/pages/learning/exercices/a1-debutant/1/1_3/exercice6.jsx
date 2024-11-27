import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import LanguageFile from "../../../../../../language";
export default function Exercice6() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="85.71%" />

      <div className="exercice_title page_exercice_text">
        <p> {LanguageFile.exerciseTitles[language].trueOrFalse}</p>
      </div>

      <VideoExercices
        miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/315443ef-5776-43de-a0f3-673d7e3fd4c6.jpg@jpg"
        audio="https://cdn.busuu.com/media/resized/audio/b30l3t_faudioonlineaudioconvertercom1660925565_1660925565.mp3"
      />

      <div className="exercice_text page_exercice_text">
        <p>Bonjour, ça va ? - Bien merci, et vous ?</p>
      </div>

      <VideoBoolExercices
        answer_1={LanguageFile.trueOrFalse[language].true}
        answer_2={LanguageFile.trueOrFalse[language].false}
        correctAnswer={LanguageFile.trueOrFalse[language].true}
        question={LanguageFile.exercise1_3[language].e6.text}
        nextExercise={"/learning/exercices/first-lessons/1/1_3/exercice7"}
      />
    </div>
  );
}
