import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";

import LanguageFile from "../../../../../../language";
export default function Exercice4() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="36.36%" prevProgressExercice={"27.27%"} />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise3_2[language].e4.text1}</p>
      </div>

      <ExplainWordWithAudio
        text={LanguageFile.exercise3_2[language].e4.text2}
        textAudio1={LanguageFile.exercise3_2[language].e4.text3}
        audioSrc1={`https://cdn.busuu.com/media-resources/video/mp4/03bd6c72-fcbc-4431-b0c5-44dfc488432b_small.mp4`}
        textAudio2={LanguageFile.exercise3_2[language].e4.text4}
        audioSrc2={`https://cdn.busuu.com/media-resources/video/mp4/e9fc00f7-a17b-4479-8ae2-7664e56257cc_small.mp4`}
      />

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/3/3_2/exercice5"}
      />
    </div>
  );
}
