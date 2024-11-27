import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";
export default function Exercice6() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="66.66%" prevProgressExercice="55.55%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise1_2[language].e6.title}</p>
      </div>

      <ExerciceWithoutVideo 
      answer_1={LanguageFile.exercise1_2[language].e5.text}
      answer_2={LanguageFile.exercise1_2[language].e3.text}
      answer_3={LanguageFile.exercise1_1[language].e1.text}
      answer_4={LanguageFile.exercise1_2[language].e1.text}
      correctAnswer={LanguageFile.exercise1_2[language].e5.text}
      nextExercise={"/learning/exercices/first-lessons/1/1_2/exercice7"}
      />
    </div>
  );
}
