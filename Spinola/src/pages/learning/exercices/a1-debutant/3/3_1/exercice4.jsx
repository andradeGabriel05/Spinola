import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import LanguageFile from "../../../../../../language";
import "../exercice.scss";

export default function Exercice4() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="44.44%" prevProgressExercice={"33.33%"} />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise3_1[language].e4.title}</p>
      </div>

      <VideoExercices
        miniature=" "
        audio="https://cdn.busuu.com/media/resized/audio/a1l8mcq21662462297_1662462297.mp3"
      />

      <ExerciceWithoutVideo
        answer_1="fatiguée"
        answer_2="contente"
        answer_3="impatiente"
        correctAnswer="fatiguée"
        nextExercise={"/learning/exercices/first-lessons/3/3_1/exercice5"}
      />
    </div>
  );
}
