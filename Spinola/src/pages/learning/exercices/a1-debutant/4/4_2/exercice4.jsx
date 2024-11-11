import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";

export default function Exercice4() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="36.36%" prevProgressExercice={"27.27%"} />

      <div className="exercice_title page_exercice_text">
        <p>👨 Masculine or feminine 👩?</p>
      </div>

      <ExplainWordWithAudio
        text={`We add an -e at the end of the adjective for words that describe people and things in the feminine form: `}
        textAudio1={`Je suis français. - a male person `}
        audioSrc1={`https://cdn.busuu.com/media-resources/video/mp4/03bd6c72-fcbc-4431-b0c5-44dfc488432b_small.mp4`}
        textAudio2={`Je suis française. - a female person `}
        audioSrc2={`https://cdn.busuu.com/media-resources/video/mp4/e9fc00f7-a17b-4479-8ae2-7664e56257cc_small.mp4`}
      />

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/3/3_2/exercice5"}
      />
    </div>
  );
}
