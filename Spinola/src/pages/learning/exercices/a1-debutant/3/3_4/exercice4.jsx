import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";

export default function Exercice4() {
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="44.44%"
        prevProgressExercice={"33.33%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>True or false?</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature={"https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg"}
          audio="https://cdn.busuu.com/media/resized/audio/a1l1151662477335_1662477335.mp3"
        />
      </div>

      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        title={`Nous sommes mexicains.`}
        correctAnswer="True"
        question={`We don't pronounce the final -s in the words "nous" and "sommes".`}
        nextExercise="/learning/exercices/first-lessons/3/3_4/exercice5"
      />
    </div>
  );
}
