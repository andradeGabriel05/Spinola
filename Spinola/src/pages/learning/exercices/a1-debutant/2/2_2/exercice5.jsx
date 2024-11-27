import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import LanguageFile from "../../../../../../language";

export default function Exercice5() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="55.55%"
        prevProgressExercice="44.44%"
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].listenAndChoose}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          videoSrc="https://static.memrise.com/uploads/items/videos/medium/86606__m__1528476179_normalized.mp4#t=0.1"
          position="top"
        />

        <ExerciceWithoutVideo
          answer_1={LanguageFile.exercise2_2[language].e5.options.a}
          answer_2={LanguageFile.exercise2_2[language].e5.options.b}
          answer_3={LanguageFile.exercise2_2[language].e5.options.c}
          answer_4={LanguageFile.exercise2_2[language].e5.options.d}
          correctAnswer={LanguageFile.exercise2_2[language].e5.options.a}
          nextExercise="/learning/exercices/first-lessons/2/2_2/exercice6"
        />
      </div>
    </div>
  );
}
