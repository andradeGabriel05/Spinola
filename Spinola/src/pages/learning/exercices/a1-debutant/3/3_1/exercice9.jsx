import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";

import LanguageFile from "../../../../../../language";

export default function Exercice9() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="100%" prevProgressExercice={"88.88%"} />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].trueOrFalse}</p>
      </div>

      <VideoExercices
        miniature={" "}
        audio="https://cdn.busuu.com/media/resized/audio/a1l8tf21662462405_1662462405.mp3"
      />

      <ExerciceWrite
        sentenceText1="Salut, je m'appelle Sophie ! "
        sentenceText2="!"
        correctAnswer="enchantée"
        nextExercise="/premiere-lecon"
        last={true}
        chapter={3}
        exercise={1}
      />
    </div>
  );
}
