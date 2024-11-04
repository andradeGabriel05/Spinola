import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";

export default function Exercice3() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="27.27%" prevProgressExercice="18.18%"/>

      <div className="exercice_title page_exercice_text">
        <p>How do we say...?</p>
      </div>

      <ExplainWordWithAudio
        text={`We are going to see that all the singular conjugated forms of "être" in the present tense end with either "s" or "t". However, when we speak, we don't pronounce these last letters! `}
        textAudio1={`Je suis contente. (I am happy.)`}
        audioSrc1={`https://cdn.busuu.com/media-resources/video/mp4/03bd6c72-fcbc-4431-b0c5-44dfc488432b_small.mp4`}
        textAudio2={`Tu es fatigué ? (Are you tired?)`}
        audioSrc2={`https://cdn.busuu.com/media-resources/video/mp4/e9fc00f7-a17b-4479-8ae2-7664e56257cc_small.mp4`}
        textAudio3={`Elle est impatiente. (She is impatient.) `}
        audioSrc3={`https://cdn.busuu.com/media-resources/video/mp4/d6a52457-650a-4ecf-b409-ee15e01ff2c6_small.mp4`}
      />

      {/* https://cdn.busuu.com/media/resized/audio/a1l681661427808_1661427808.mp3 */}

      <FooterExercices
        nextExercise={"/learning/exercices/premiere-lessons/2/2_3/exercice4"}
      />
    </div>
  );
}
