import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import LanguageFile from "../../../../../../language";
import "../exercice.scss";

export default function Exercice4() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="57.14%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise1_3[language].e4.text}</p>
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
