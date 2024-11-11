import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import audio from "Spinola/public/recordsExercices/marieEtSophieFr.mp3"
import audio2 from "Spinola/public/recordsExercices/pierreEtThomasFr.mp3"
import audio3 from "Spinola/public/recordsExercices/mariePierreSophieThomasFr.mp3"
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";

export default function Exercice8() {
  return (
    <div className="container_execice">
      <HeaderExercices
        progressExercice="88.88%"
        prevProgressExercice={"77.77%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>When do we use "ils"?</p>
      </div>

      <ExplainWordWithAudio
        text={`We use "ils" when we talk about a group of men. We also use it to refer to a mixed group of men and women.`}
        textAudio1="Marie et Sophie = Elles sont françaises."
        audioSrc1={audio}
        textAudio2="Pierre et Thomas = Ils sont français."
        audioSrc2={audio2}
        textAudio3="Marie, Pierre, Sophie et Thomas = Ils sont français."
        audioSrc3={audio3}
      />

      {/* https://cdn.busuu.com/media/resized/audio/a1l681661427808_1661427808.mp3 */}

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/3/3_4/exercice9"}
      />
    </div>
  );
}
