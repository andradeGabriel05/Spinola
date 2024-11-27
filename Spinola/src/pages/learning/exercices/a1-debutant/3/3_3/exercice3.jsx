import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import LanguageFile from "../../../../../../language";

export default function Exercice3() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="42.85%" prevProgressExercice={"28.57%"} />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise3_3[language].e3.title}</p>
      </div>

      <ExerciceWithoutVideo
          answer_1="anglaise"
          answer_2="mexicaine"
          answer_3="française"
          answer_4="américain"
          correctAnswer="américain"
          nextExercise="/learning/exercices/first-lessons/3/3_3/exercice4"
      />
    </div>
  );
}
