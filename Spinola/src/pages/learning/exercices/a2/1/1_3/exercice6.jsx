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
      <HeaderExercices progressExercice="85.71%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence with the correct form of "traîner": Elle... dans sa chambre toute la semaine.</p>
      </div>

      <ExerciceWithoutVideo
        answer_1="est traîné"
        answer_2="a traîné"
        answer_3="a traînée"
        correctAnswer="a traîné"
        nextExercise={"/learning/exercices/a2/1/1_3/exercice7"}
      />
    </div>
  );
}
