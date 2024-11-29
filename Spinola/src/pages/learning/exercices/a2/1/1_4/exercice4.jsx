import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import LanguageFile from "../../../../../../language";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
export default function Exercice4() {
  exerciceCounter.length = 0;
  exerciceCounter.push("correct");

  console.log(exerciceCounter);

  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
        
        <HeaderExercices progressExercice="57.14%" prevProgressExercice="42.85%" />

      <div className="exercice_title page_exercice_text">
        <p>Which sentence is grammatically correct?</p>
      </div>

      <ExerciceWithoutVideo
        answer_1="Nous avons allé au resto."
        answer_2="Nous nous avons promené."
        answer_3="Je me suis reposée."
        correctAnswer="Je me suis reposée."
        nextExercise={"/learning/exercices/a2/1/1_4/exercice5"}
      />
    </div>
  );
}
