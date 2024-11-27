import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import audio from "Spinola/public/recordsExercices/paulAmerican.mp3";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";

import LanguageFile from "../../../../../../Language";
export default function Exercice3() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="42.85%" prevProgressExercice={"28.57%"} />
      <div className="exercice_title page_exercice_text">
      <p>{LanguageFile.exerciseTitles[language].write}</p>
      </div>

      <VideoExercices audio={"https://cdn.busuu.com/media-resources/audio/3c1262c4-5111-4f20-9085-c3b347ac0cd1.mp3"} miniature={" "} />

      <ExerciceWrite
        sentenceText1="Je suis"
        sentenceText2="."
        correctAnswer="americain"
        nextExercise="/learning/exercices/first-lessons/4/4_3/exercice4"
      />
    </div>
  );
}
