import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

export default function Exercice5() {
  return (
    <div className="container_execice">
      <HeaderExercices
        progressExercice="45.45%"
        prevProgressExercice={"36.36%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>Select the statement that describes Andy best.</p>
      </div>

      <ExerciceWithoutVideo
        answer_1="He is tired."
        answer_2="He is happy."
        answer_3="He is impatient."
        correctAnswer="He is impatient."
        nextExercise="/learning/exercices/first-lessons/4/4_2/exercice6"
      />
    </div>
  );
}
