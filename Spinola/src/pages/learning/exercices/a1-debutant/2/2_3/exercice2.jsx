import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";

export default function Exercice2() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="18.18%" prevProgressExercice="9.09%" />

      <div className="exercice_title page_exercice_text">
        <p>Être - être fatigué, être contente </p>
      </div>

      <ExplainWord
        text1={LanguageFile.exercise2_3[language].e2.text1}
        text2={LanguageFile.exercise2_3[language].e2.text2}
        text3={LanguageFile.exercise2_3[language].e2.text3}
        text4={LanguageFile.exercise2_3[language].e2.text4}
        text5={LanguageFile.exercise2_3[language].e2.text5}
      />

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/2/2_3/exercice3"}
      />
    </div>
  );
}
