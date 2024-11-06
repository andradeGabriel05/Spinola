import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import "../exercice.scss";

export default function Exercice4() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="57.14%" />

      <div className="exercice_title page_exercice_text">
        <p>How can we reply to the question: "Ça va ?"</p>
      </div>

      <ExerciceWithoutVideo
        answer_1="De rien"
        answer_2="Merci"
        answer_3="Bien, merci"
        answer_4="S'il vous plaît"
        correctAnswer="Bien, merci"
        nextExercise={"/learning/exercices/first-lessons/1/1_3/exercice5"}
      />
    </div>
  );
}
