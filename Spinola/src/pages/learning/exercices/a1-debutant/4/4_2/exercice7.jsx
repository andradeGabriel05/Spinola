import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";
import audio from "Spinola/public/recordsExercices/nousSommesAubergeEspagnole.mp3";

import LanguageFile from "../../../../../../language";
export default function Exercice7() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="100%"
        prevProgressExercice={"84%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>L'auberge espagnole !</p>
      </div>

      <ExplainWordWithAudio
        text={LanguageFile.exercise4_2[language].e7.text}
        textAudio1={LanguageFile.exercise4_2[language].e7.text2}
        audioSrc1={audio}
      />

      <FooterExercices
        nextExercise={"/premiere-lecon"} last={true} chapter={4} exercise={2}
      />
    </div>
  );
}

// https://cdn.busuu.com/media-resources/audio/e4e29037-b7f6-4bf0-bab6-9ee081ddbf8f.mp3
