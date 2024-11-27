import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import LanguageFile from "../../../../../../language";
export default function Exercice5() {

  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="70%"
        prevProgressExercice={"56%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise4_2[language].e5.text}</p>
      </div>

      <ExerciceWithoutVideo
        answer_1={LanguageFile.exercise4_2[language].e5.text2}
        answer_2={LanguageFile.exercise4_2[language].e5.text3}
        answer_3={LanguageFile.exercise4_2[language].e5.text4}
        correctAnswer={LanguageFile.exercise4_2[language].e5.text4}
        nextExercise="/learning/exercices/first-lessons/4/4_2/exercice6"
      />
    </div>
  );
}
