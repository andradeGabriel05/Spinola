import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

export default function Exercice3() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="42.85%" prevProgressExercice={"28.57%"} />

      <div className="exercice_title page_exercice_text">
        <p>Select the nationality that describe a man.</p>
      </div>

      <ExerciceWithoutVideo
          answer_1="anglaise"
          answer_2="mexicaine"
          answer_3="française"
          answer_4="américain"
          correctAnswer="américain"
          nextExercise="/learning/exercices/first-lessons/3/3_3/exercice4"
      />
    </div>
  );
}
