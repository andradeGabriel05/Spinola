import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import LanguageFile from "../../../../../../language";
export default function Exercice9() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="100%" prevProgressExercice="88.88%"/>

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].whatSaying}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://static.memrise.com/uploads/items/videos/medium/IAV_ALX22FR02_ZADE112_116635_65880726__14571__f_normalized.mp4#t=0.1" />

        <ExerciceWithoutVideo
          answer_1="Trés bien"
          answer_2="Tres bien"
          answer_3="Très bien"
          answer_4="Trés ben"
          correctAnswer="Très bien"
          nextExercise="/premiere-lecon"
          last={true}
          chapter={2}
          exercise={2}
        />
      </div>
    </div>
  );
}
