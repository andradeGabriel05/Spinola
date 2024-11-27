import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";

export default function Exercice9() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="90%" />

      <div className="exercice_title page_exercice_text">
        <p>👋 Enchantée 👋</p>
      </div>

      <ExplainWord
        text1={LanguageFile.exercise2_1[language].e9.text1}
        text2={LanguageFile.exercise2_1[language].e9.text2}
        text3={LanguageFile.exercise2_1[language].e9.text3}
      />

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/2/2_1/exercice10"}
      />
    </div>
  );
}
