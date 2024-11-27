import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import LanguageFile from "../../../../../../language";
export default function Exercice3() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="42.85%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise1_4[language].e3.text}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/608f2f54-b28a-4b93-bba5-8ba5970752ac.jpg@jpg"
          audio="https://cdn.busuu.com/media-resources/audio/605cffb3-c6c4-4341-a1d0-36b4f3b4c0aa.mp3"
        />
      </div>

      <ExerciceWithoutVideo
        answer_1={LanguageFile.exercise1_4[language].e3.options.a}
        answer_2={LanguageFile.exercise1_4[language].e3.options.b}
        answer_3={LanguageFile.exercise1_4[language].e3.options.c}
        answer_4={LanguageFile.exercise1_4[language].e3.options.d}
        correctAnswer={LanguageFile.exercise1_4[language].e3.options.a}
        nextExercise={"/learning/exercices/first-lessons/1/1_4/exercice4"}
      />
    </div>
  );
}
