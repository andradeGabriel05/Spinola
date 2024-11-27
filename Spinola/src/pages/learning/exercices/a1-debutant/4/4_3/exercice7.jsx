import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

import LanguageFile from "../../../../../../Language";

export default function Exercice7() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="85.71%"
        prevProgressExercice={"71.42%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].write}</p>
      </div>

      <VideoExercices
        miniature={" "}
        audio={
          "https://cdn.busuu.com/media-resources/audio/4948f4db-90e1-4c63-a9b2-dc467d1aa3b6.mp3"
        }
      />

      <ExerciceWrite
        sentenceText1="Tom "
        sentenceText2="souvent impatient."
        correctAnswer="est"
        nextExercise="/premiere-lecon"
        last={true}
        chapter={4}
        exercise={3}
      />
    </div>
  );
}
