import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";

export default function Exercice4() {
  return (
    <div className="container_execice bigger_page">
      <HeaderExercices progressExercice="36.36%" prevProgressExercice={"27.27%"} />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices
      miniature={" "}
      audio={"https://cdn.busuu.com/media-resources/audio/763f007d-cd85-4f86-845e-161f85eb490d.mp3"}
      />

      <ExerciceWrite
        sentenceText1="Je suis "
        sentenceText2="et je suis à Paris, en France."
        correctAnswer="anglaise"
        nextExercise="/learning/exercices/first-lessons/4/4_2/exercice5"
      />
    </div>
  );
}
