import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

import LanguageFile from "../../../../../../Language";
export default function Exercice2() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="11.11%" prevProgressExercice={"0%"} />

      <div className="exercice_title page_exercice_text">
      <p>{LanguageFile.exerciseTitles[language].write}</p>

      </div>

      <ExerciceWrite
        sentenceText1="Vous "
        sentenceText2="anglaises?"
        correctAnswer="êtes"
        nextExercise="/learning/exercices/first-lessons/4/4_4/exercice3"
      />
    </div>
  );
}
