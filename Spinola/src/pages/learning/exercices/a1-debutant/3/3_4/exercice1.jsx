import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";

import LanguageFile from "../../../../../../Language";

export default function Exercice1() {
  const language = localStorage.getItem("language");
  exerciceCounter.length = 0;
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="11.11%" prevProgressExercice={"0%"} />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise3_4[language].e1.title}</p>
      </div>

      <ExplainWord 
      text1={LanguageFile.exercise3_4[language].e1.text1}
      text2={LanguageFile.exercise3_4[language].e1.text2}
      text3={LanguageFile.exercise3_4[language].e1.text3}
/>

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/3/3_4/exercice2"}
      />
    </div>
  );
}
