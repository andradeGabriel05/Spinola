import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";

export default function Exercice9() {
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="100%"
        prevProgressExercice={"88.88%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>True or false?</p>
      </div>

      <VideoExercices miniature={" "} audio="https://cdn.busuu.com/media/resized/audio/a1l11121662477568_1662477568.mp3" />

      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        title={`Lisa et Marc ? Ils sont impatients !`}
        correctAnswer="True"
        question={`Victor is talking about a man and a woman. `}
        nextExercise="/learning/exercices/first-lessons/3/3_4/exercice10"
      />
    </div>
  );
}
