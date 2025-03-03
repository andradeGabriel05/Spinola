import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

import LanguageFile from "../../../../../../language";

export default function Exercice7() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="63.63%"
        prevProgressExercice={"54.54%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise3_2[language].e7.text}</p>
      </div>


      <VideoInputExercices
        answer_1="anglaise"
        answer_2="anglais"
        sentenceText1="Hannah est "
        sentenceText2="et Miles est"
        sentenceText3="."
        correctAnswer="anglaise"
        correctAnswer2="anglais"
        nextExercise={"/learning/exercices/first-lessons/3/3_2/exercice8"}
      />
    </div>
  );
}

// https://cdn.busuu.com/media-resources/audio/e4e29037-b7f6-4bf0-bab6-9ee081ddbf8f.mp3
