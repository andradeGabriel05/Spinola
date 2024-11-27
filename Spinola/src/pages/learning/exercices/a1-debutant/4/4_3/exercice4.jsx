import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

import LanguageFile from "../../../../../../Language";
export default function Exercice4() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="57.14%"
        prevProgressExercice={"42.85%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices
        miniature={"https://cdn.busuu.com/media/resized/entity/720/shutterstock_11082080481662133842_1662133842_720.jpg"}
        audio={
          "https://cdn.busuu.com/media-resources/audio/42573d95-c789-4ffd-aef4-864194be542f.mp3"
        }
      />

      <VideoInputExercices
        answer_1="m'"
        answer_2="appelle"
        answer_3="allemande"
        answer_4="appel"
        answer_5="Allemande"
        sentenceText1="Je "
        sentenceText2=""
        sentenceText3="Kristina et je suis"
  sentenceText4="."
        correctAnswer="m'"
        correctAnswer2="appelle"
        correctAnswer3="allemande"
        nextExercise="/learning/exercices/first-lessons/4/4_3/exercice5"
      />
    </div>
  );
}
