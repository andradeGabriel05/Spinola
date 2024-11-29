import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import LanguageFile from "../../../../../../language";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
export default function Exercice1() {
  exerciceCounter.length = 0;
  exerciceCounter.push("correct");

  console.log(exerciceCounter);

  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="14.28%" />

      <div className="exercice_title page_exercice_text">
        <p>Which sentence is grammatically correct?</p>
      </div>

      <ExerciceWithoutVideo
        answer_1="Paul a lu un livre."
        answer_2="Elle est sorti."
        answer_3="Nous sommes allé au resto."
        correctAnswer="Paul a lu un livre."
        nextExercise={"/learning/exercices/a2/1/1_3/exercice2"}
      />
    </div>
  );
}
