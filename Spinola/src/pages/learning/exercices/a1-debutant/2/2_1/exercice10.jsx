import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import LanguageFile from "../../../../../../language";

export default function Exercice10() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="100%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].listenAndChoose}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/278c0dab-e906-40fc-8527-23c43e526f9f.jpg@jpg"
          audio="https://cdn.busuu.com/media-resources/audio/4d0f024d-f5fa-4df7-8e02-d7ea91f3cc5a.mp3"
        />
      </div>

      <ExerciceWithoutVideo
        answer_1={LanguageFile.exercise2_1[language].e10.options.a}
        answer_2={LanguageFile.exercise2_1[language].e10.options.b}
        answer_3={LanguageFile.exercise2_1[language].e10.options.c}
        answer_4={LanguageFile.exercise2_1[language].e10.options.d}
        correctAnswer={LanguageFile.exercise2_1[language].e10.options.b}
        nextExercise={"/premiere-lecon"}
        last={true}
        chapter={2}
        exercise={1}
      />
    </div>
  );
}
