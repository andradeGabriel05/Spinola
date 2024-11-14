import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";

export default function Exercice5() {
  return (
    <div className="container_execice">
      <HeaderExercices
        progressExercice="55.55%"
        prevProgressExercice={"44.44%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>What is he saying?</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature={" "}
          audio="https://cdn.busuu.com/media/resized/audio/a1l11121662477568_1662477568.mp3"
        />
      </div>

      <div className="exercice_text page_exercice_text">
        <p></p>

      </div>

      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        title="Lisa et Marc ? Ils sont impatients !"
        correctAnswer="True"
        question="Victor is talking about a man and a woman. "
        nextExercise="/learning/exercices/first-lessons/4/4_4/exercice6"
      />
    </div>
  );
}
