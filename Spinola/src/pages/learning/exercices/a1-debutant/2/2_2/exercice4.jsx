import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";

import LanguageFile from "../../../../../../language";

export default function Exercice4() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="44.44%" prevProgressExercice="33.33%"/>

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise2_2[language].e4.title}</p>
      </div>

      <ExplainWord
        text1={LanguageFile.exercise2_2[language].e4.text1}
        text2={LanguageFile.exercise2_2[language].e4.text2}
        text3={LanguageFile.exercise2_2[language].e4.text3}
      />

      <FooterExercices nextExercise={"/learning/exercices/first-lessons/2/2_2/exercice5"} />
    </div>
  );
}
