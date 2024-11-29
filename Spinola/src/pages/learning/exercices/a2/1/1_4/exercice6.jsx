import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import LanguageFile from "../../../../../../language";

export default function Exercice6() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="100%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices
        miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/cde58dc6-e494-4b24-912e-12ea58e4f4a5.jpg@jpg"
        audio={"https://cdn.busuu.com/media-resources/audio/12af90be-de27-4fda-9b44-33a9b947723c.mp3"}
      />

      <VideoInputExercices
        answer_1="sommes"
        answer_2="promené"
        answer_3="sont"
        answer_4="promenés"
        sentenceText1="Nous nous"
        sentenceText2=" "
        sentenceText3=" "
        correctAnswer="sommes"
        correctAnswer2="promenés"
        nextExercise={"/premiere-lecon"}
        last={true}
        chapter={1}
        exercise={4}
        level={"A2"}
      />
    </div>
  );
}
