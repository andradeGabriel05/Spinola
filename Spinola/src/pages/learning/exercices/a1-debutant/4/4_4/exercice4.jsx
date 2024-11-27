import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";

import LanguageFile from "../../../../../../Language";
export default function Exercice4() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="44.44%"
        prevProgressExercice={"33.33%"}
      />

      <div className="exercice_title page_exercice_text">
          <p>{LanguageFile.exerciseTitles[language].write}</p>

      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature={" "}
          audio="https://cdn.busuu.com/media-resources/audio/763f007d-cd85-4f86-845e-161f85eb490d.mp3"
        />
      </div>

      <ExerciceWrite
        sentenceText1="Je suis "
        sentenceText2="et je suis à Paris, en France."

        correctAnswer="anglaise"
        nextExercise="/learning/exercices/first-lessons/4/4_4/exercice5"
      />
    </div>
  );
}
