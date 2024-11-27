import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";

export default function Exercice2() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="22.22%" prevProgressExercice={"11.11%"} />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise3_1[language].e2.title}</p>
      </div>

      <VideoExercices miniature={"https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/035ac296-f83f-4d8d-ae98-3eeeb3c52cac.jpg@jpg"} audio="https://cdn.busuu.com/media/resized/audio/a1l8mcq1onlineaudioconvertercom1662463532_1662463532.mp3" />

      <ExerciceWithoutVideo
        answer_1={LanguageFile.exercise3_1[language].e2.options.a}
        answer_2={LanguageFile.exercise3_1[language].e2.options.b}
        answer_3={LanguageFile.exercise3_1[language].e2.options.c}
        correctAnswer={LanguageFile.exercise3_1[language].e2.options.c}
        nextExercise={"/learning/exercices/first-lessons/3/3_1/exercice3"}
      />
    </div>
  );
}
