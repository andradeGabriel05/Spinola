import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";
import audio from "Spinola/public/recordsExercices/nousSommesAubergeEspagnole.mp3";
export default function Exercice7() {
  return (
    <div className="container_execice">
      <HeaderExercices
        progressExercice="63.63%"
        prevProgressExercice={"54.54%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>L'auberge espagnole !</p>
      </div>

      <ExplainWordWithAudio
        text={`It's common now to use the expression "auberge espagnole" when talking about a group of friends living together from very different cultural backgrounds who feel enriched by this experience. `}
        textAudio1={`Nous sommes une vraie auberge espagnole ! (We are a true "auberge espagnole".)`}
        audioSrc1={audio}
      />

      <FooterExercices
        nextExercise={"/premiere-lecon"}
      />
    </div>
  );
}

// https://cdn.busuu.com/media-resources/audio/e4e29037-b7f6-4bf0-bab6-9ee081ddbf8f.mp3
