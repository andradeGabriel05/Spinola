import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import LanguageFile from "../../../../../../language";
export default function Exercice8() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="88.88%" prevProgressExercice="77.77%"/>

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].listenAndChoose}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          videoSrc="https://static.memrise.com/uploads/things/video/medium/1000091193_161125_1359_29.mp4#t=0.1"
        />

        <ExerciceWithoutVideo
          answer_1={LanguageFile.exercise2_2[language].e8.options.a}
          answer_2={LanguageFile.exercise2_2[language].e8.options.b}
          answer_3={LanguageFile.exercise2_2[language].e8.options.c}
          answer_4={LanguageFile.exercise2_2[language].e8.options.d}
          correctAnswer={LanguageFile.exercise2_2[language].e8.options.c}
          nextExercise="/learning/exercices/first-lessons/2/2_2/exercice9"
        />
      </div>
    </div>
  );
}
