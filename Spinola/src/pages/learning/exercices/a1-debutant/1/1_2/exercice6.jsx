import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice6() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="66.66%" prevProgressExercice="55.55%" />

      <div className="exercice_title page_exercice_text">
        <p>How can you respond when someone says "merci"?</p>
      </div>

      <ExerciceWithoutVideo 
      answer_1="De rien"
      answer_2="Merci"
      answer_3="Bonjour"
      correctAnswer="De rien"
      answer_4="S'il vous plaît"
      nextExercise={"/learning/exercices/premiere-lessons/1/1_2/exercice7"}
      />
    </div>
  );
}
